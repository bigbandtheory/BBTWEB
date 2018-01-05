/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const compression = require('compression');
const logger = require('morgan');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const bodyParser = require('body-parser');
const databaseConfig = require('./database/config');
const cluster = require('cluster');

const clientRouter = require('./ClientRouter');
const eventRouter  = require('./EventRouter');
const artistRouter = require('./ArtistRouter');

app.use(compression());
// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('/public',express.static(path.join(__dirname , '../public')));
  app.use('/assets',express.static(path.join(__dirname , '../src/assets/')));
  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.use('/public',express.static(path.join(__dirname , '../public')));
  app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

cluster.on('exit', (worker, code, signal) => {
  console.log('worker %d died (%s). restarting...',
              worker.process.pid, signal || code);
  cluster.fork();
});

app.use(logger());

app.use('/clients', clientRouter);
app.use('/events',  eventRouter);
app.use('/artists', artistRouter);

app.post('/subscribe' , function(req , res){
  let response = {
    message: 'Something went wrong , please contact us.'
  }
  if(req.body.email){
    response.message ='Thanks for subscribing.';
  }
  res.json(response);
});

