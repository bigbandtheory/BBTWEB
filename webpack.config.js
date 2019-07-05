'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverConfig = {
    entry: path.join(__dirname, 'server/index.js'),
    target: "node",
    devtool: "source-map",
    externals: [nodeExternals()],
    node: {
        console: true,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: true,
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.css']
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude:  /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            url: true,
                            sourceMap: false,
                            modules: true,
                            importLoaders: 2,
                        }
                    },
                    'resolve-url-loader',
                ]
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        }),
       /* new MiniCssExtractPlugin({
            filename: '[name].css',
        }),*/
        /*new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'dist/index.html'),
            template: path.join(__dirname, 'template/index.ejs')
        }),*/
    ]
};

const config = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                extractComments: true,
                sourceMap: true,
                terserOptions: {
                    ie8: true,
                    safari10: true,
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            })
        ]
    },
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve('dist/js'),
        filename: 'index.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.css']
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }, {
                test: /\.(json)$/,
                use: 'json-loader',
            }, {
                test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader?name=../assets/svg/[name]-[hash].[ext]',
            }, {
                test: /\.(jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?name=../assets/images/[name]-[hash].[ext]',
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader?name=../assets/fonts/[name]-[hash].[ext]',
            }, {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            url: true,
                            sourceMap: false,
                            modules: true,
                            importLoaders: 2,
                        }
                    },
                    'resolve-url-loader',
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'dist/index.html'),
            template: path.join(__dirname, 'template/index.ejs')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.apiKey': 'AIzaSyBM3QqWF3ngbOordLdWmS-yyvKaSQ1atEI',
            'process.env.authDomain': 'bbt-web.firebaseapp.com',
            'process.env.databaseURL': 'https://bbt-web.firebaseio.com',
            'process.env.projectId': 'bbt-web',
            'process.env.storageBucket': 'bbt-web.appspot.com',
            'messagingSenderId': '749082017862',
            'process.env.FB_APP_ID': '652025375244402',
        }),
        new webpack.LoaderOptionsPlugin({
            "__DEVTOOLS__": true,
            debug: false,
            cache: false
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: '../assets'}
        ])
    ]
};
// process.env.NODE_ENV === 'production' ? config.plugins.push(uglifyPlugin) : null;

module.exports = [serverConfig, config];