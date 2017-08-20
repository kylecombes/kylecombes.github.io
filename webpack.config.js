const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        'build/bundle' : path.resolve(APP_DIR, 'index.jsx'),
    },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    target: 'web',
    module: {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    }
};
