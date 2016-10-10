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
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }]
    },
    devServer: {
        contentBase: __dirname,
        port: 3000,
        stats: {
            colors: true
        },
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    externals: [{
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    }]
};
