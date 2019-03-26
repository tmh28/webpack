/**
 * Created by wuxueyong on 17/8/1.
 */
var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
        app:'./13-async/src/main.js'
    },
    output:{
        path: path.resolve(__dirname, './dist/'),
        publicPath: './',
        filename: '[name].js'
    },
    module:{
        loaders:[
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./13-async/src/index.html',
        })
    ]
}