const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./component/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "cs-validation.js",
        sourceMapFilename: 'cs-validation.map',
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
            exclude: /(node_modules|bower_components)/, //这两种文件不编译
            loader: 'babel',
            query: {
                presets: ['es2015', "stage-0"]
            }
        }]
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        // 根据文件大小排序
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // 删除重复依赖包
        // new webpack.optimize.DedupePlugin(),
        // 对文件进行压缩
        // new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};
