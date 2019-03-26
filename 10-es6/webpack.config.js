/**
 * Created by wuxueyong on 17/8/1.
 */
var htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './10-es6/src/entry.js',
    output: {
        filename: './10-es6/dist/dist.js'
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: '/\.js$/',
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            title: 'my app',
            filename: './10-es6/dist/index.html',
            template: './10-es6/src/index.html'
        })
    ]

}