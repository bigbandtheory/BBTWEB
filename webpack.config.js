'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  /*externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },*/
  /*resolve: {
    extensions: [".ts", "tsx",]
  },*/
  devtool: 'source-map',
  entry: {
    main : path.join(__dirname, 'src/index.js'),
    //dragability : path.join(__dirname , 'src/assets/js/draggabilly.pkgd.min.js')
    //jqueryeasing: path.join(__dirname, 'src/assets/js/jquery.easing.1.3.js')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: process.env.NODE_ENV === 'production'? '[name]-[hash].min.js': '[name]-[hash].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname,'dist/index.html'),
      template: path.join(__dirname, 'template/index.ejs')
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.apiKey' : 'AIzaSyBM3QqWF3ngbOordLdWmS-yyvKaSQ1atEI',
      'process.env.authDomain' : 'bbt-web.firebaseapp.com',
      'process.env.databaseURL': 'https://bbt-web.firebaseio.com',
      'process.env.projectId' : 'bbt-web',
      'process.env.storageBucket': 'bbt-web.appspot.com',
      'messagingSenderId' : '749082017862',
      'process.env.FB_APP_ID': '652025375244402'
    }),
    new webpack.LoaderOptionsPlugin({
      "__DEVTOOLS__": true,
      debug: false,
      cache: false
    }),
    new CopyWebpackPlugin([
      {from : 'src/assets', to : './assets'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015','stage-0']
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },{
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader',
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./assets/svg/[name]-[hash].[ext]',
      },
      {
        test: /\.(jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?name=./assets/images/[name]-[hash].[ext]',
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader?name=./assets/fonts/[name]-[hash].[ext]",
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader']
        }),
      }
    ]
  }
};
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compressor: {
    warnings: false,
    screw_ie8: true
  }
});

process.env.NODE_ENV === 'production' ? config.plugins.push(uglifyPlugin): null;

module.exports = config;