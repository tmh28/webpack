/**
 * Created by wuxueyong on 17/8/1.
 */
var path=require('path');
module.exports={
    entry:{
        app:['./11-server/src/entry.js']
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath: "a/",
        filename: "dist.js"
    },
    devServer:{
        port:'4000',
        contentBase:'./11-server/dist'
    }
}