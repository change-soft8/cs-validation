const path = require("path");
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:8888', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        "./entry.js"
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: 'build'
    },
    // resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            // css 文件需要加载的loader 
            // npm install style-loader css-loader --save
            {
                test: /\.css$/,
                loader: "style!css"
            },
            // react 需要加载的loader
            // babel 在下面配置
            // npm install babel-preset-es2015 babel-preset-react --save
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, //这两种文件不编译
                loaders: ['react-hot', 'babel']
            },
            
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf$/,
                loader: "file-loader"
            }, {
                test: /\.eot$/,
                loader: "file-loader"
            }, {
                test: /\.svg$/,
                loader: "file-loader"
            }

        ]
    },
    // chrome引入了source-map文件，标识es5代码对应的转码前的es6代码
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname, // 当前服务目录
        port: 8888,
        inline: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin({
            browser: 'Chrome'
        })
    ]
};
