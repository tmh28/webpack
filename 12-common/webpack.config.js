/**
 * Created by wuxueyong on 17/8/1.
 */
var webpack = require('webpack');
module.exports={
    entry:{
        page1:'./12-common/src/page1.js',
        page2:'./12-common/src/page2.js'
    },
    output:{
        filename:'./12-common/dist/[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
}