var path = require('path');
var BUNDLE_PATH = path.resolve(__dirname, "public");
const APP_DIR   = path.resolve(__dirname, 'client');

var config = {
    entry : './client/app/index.jsx',
    output : {
        filename : 'bundle.js',
        path : BUNDLE_PATH
    },
    module : {
        loaders: [
            {
                test   : /\.jsx?/,
                include: APP_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
module.exports = config;


