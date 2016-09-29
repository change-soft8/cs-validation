const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: [
        "./entry.js"
    ],
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
    },
    // resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(js|jsx)/,
            exclude: /(node_modules|bower_components)/, //这两种文件不编译
            loaders: ['babel']
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    externals: [{
        'CsValidation': 'CsValidation',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    }]
};
