/**
 * Created by wuxueyong on 17/7/31.
 */
var path = require('path');
module.exports = {
    entry: './5-img/src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'dist.js',

        //  path: './dist/'
        // publicPath: 'dist/',
        // filename: 'dist.js',
    },
    module: {
        loaders: [{
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
}