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
    externals: [nodeExternals({
        whitelist: /\.css$/,
    })],
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
        filename: 'server.bundle.js',
        publicPath: '/dist/js/',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                exclude: [/\.(js|tsx|ts|tsx|css|mjs|html|ejs|json)$/],
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'assets/[name].[hash:8].[ext]',
                            emitFile: false,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            url: true,
                            modules: true,
                            importLoaders: 1,
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
        new MiniCssExtractPlugin({
            filename:
                process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[contenthash].css',
            chunkFilename:
                process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[contenthash].css',
        }),
    ]
};

const config = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                // TerserPlugin config is taken entirely from react-scripts
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true,
            }),
        ],
        namedModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve('dist/js'),
        filename: 'index.js',
        publicPath: '/dist/js/',
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
            template: path.join(__dirname, 'template/index.ejs'),
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename:
                process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[contenthash].css',
            chunkFilename:
                process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[contenthash].css',
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

module.exports = [config, serverConfig];