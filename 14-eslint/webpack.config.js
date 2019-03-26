/**
 * Created by wuxueyong on 17/8/1.
 */
module.exports={
    entry:'./14-eslint/src/entry.js',
    output:{
        filename:'./14-eslint/dist/main.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'eslint-loader',
            }
        ]
    }
}