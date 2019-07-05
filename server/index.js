/* eslint no-console: 0 */
if (typeof window === 'undefined') {
    global.window = {};
}
import 'ignore-styles';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const path = require('path');
const express = require('express');
/*const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');*/
import App from '../src/js/App';
const fs = require('fs');

const config = require('../webpack.config.js');
const compression = require('compression');
const logger = require('morgan');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port =  process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const databaseConfig = require('./database/config');
const cluster = require('cluster');


const clientRouter = require('./ClientRouter');
const eventRouter = require('./EventRouter');
const artistRouter = require('./ArtistRouter');

const numCPUs = require('os').cpus().length;

app.use(compression());
// parse application/json
app.use(bodyParser.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' });

app.use(logger('combined', {stream: accessLogStream}));

app.use('/clients', clientRouter);
app.use('/events', eventRouter);
app.use('/artists', artistRouter);



const serverRender = (req, res) => {
    const indexFile = path.resolve('./dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Something went wrong!');
        }
        return res.send(
            data.replace('<div id = "root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`)
        );
    });
};


app.post('/subscribe', function (req, res) {
    let response = {
        message: 'Something went wrong , please contact us.'
    };
    if (req.body.email) {
        response.message = 'Thanks for subscribing.';
    }
    res.json(response);
});

const cwd = process.cwd();

if (process.env.NODE_ENV !== 'production') {
    console.log('RUNNING NON PRODUCTION SETTINGS');

    /* const compiler = webpack(config);
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
     app.use(webpackHotMiddleware(compiler));*/

    console.log('DIRECTORY LOCATION ----',cwd);
    app.use('/dist', express.static(path.join(cwd, '/dist')));
    app.use('*/assets/', express.static(path.join(cwd, '/dist/assets/')));
    app.use('*/js/', express.static(path.join(cwd, '/dist/js/')));
    app.use('/0.index.js', express.static(path.join(cwd, '/dist/js/0.index.js')));
    app.use('/0.server.bundle.js', express.static(path.join(cwd, '/dist/js/0.server.bundle.js')));
    app.use('/0.css', express.static(path.join(cwd,'/dist/js/0.css')))
    app.get('/*', serverRender);
} else if (process.env.NODE_ENV === 'heroku') {
    console.log('RUNNING HEROKU SETTINGS');
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
    app.use('*/public', express.static(path.join(__dirname, 'public')));
    app.use('*/assets', express.static(path.join(__dirname, 'dist/assets/')));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
} else {
    console.log('RUNNING PRODUCTION SETTINGS');
    app.use('/dist', express.static(path.join(cwd, '/dist')));
    app.use('*/assets/', express.static(path.join(cwd, '/dist/assets/')));
    app.use('*/js/', express.static(path.join(cwd, '/dist/js/')));
    app.use('/0.index.js', express.static(path.join(cwd, '/dist/js/0.index.js')));
    app.use('/0.server.bundle.js', express.static(path.join(cwd, '/dist/js/0.server.bundle.js')));
    app.get('/*', serverRender);
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



