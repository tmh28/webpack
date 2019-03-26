/**
 * Created by wuxueyong on 17/7/31.
 */
var path = require('path')
module.exports = {
    entry: './4-less/src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.js"
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    }
}