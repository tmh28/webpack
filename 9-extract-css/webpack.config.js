/**
 * Created by wuxueyong on 17/8/1.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './9-extract-css/src/entry.js',
    output: {
        filename: "./9-extract-css/dist/dist.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(["css-loader", "less-loader"])
        }]
    },
    plugins: [new ExtractTextPlugin({
        filename: './9-extract-css/dist/output.css'
    }), ]

}