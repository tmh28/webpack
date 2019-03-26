var path = require('path')
var webpack = require('webpack');
/* var uglify = webpack.optimize.UglifyJsPlugin */

module.exports = {
    entry: './6-uglify/src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.js'
    },
    /*  plugins: [
         new UglifyJSPlugin({
             compress: {
                 warnings: false
             }
         })
     ] */
    /* webpack4.x下，压缩代码不在webpack.config.js中写plugins: [ new webpack.optimize.UglifyJsPlugin() ],而是在package.json中的script下面写：

        "start": "webpack --mode production",
        "build": "webpack --mode development"
    --------------------- 
    作者：yhlysy 
    来源：CSDN 
    原文：https://blog.csdn.net/yhlysy/article/details/80404624 
    版权声明：本文为博主原创文章，转载请附上博文链接！ */
}