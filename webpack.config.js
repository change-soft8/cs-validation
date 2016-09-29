const path = require("path");
const webpack = require('webpack');

module.exports = {
    output: {
        library: 'CsValidation',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(js|jsx)/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
