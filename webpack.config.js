require('dotenv').config();
var path = require('path');
var webpack = require('webpack');
var BUNDLE_PATH = path.resolve(__dirname, "public");
const APP_DIR = path.resolve(__dirname, 'client');

var config = {
    entry: './client/app/index.jsx',
    output: {
        filename: 'bundle.js',
        path: BUNDLE_PATH
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                API_PATH: JSON.stringify(process.env.API_URL),
            }
        }),
    ],
};
module.exports = config;


