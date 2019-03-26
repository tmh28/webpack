var htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './7-html/src/entry.js',
    output: {
        filename: './7-html/dist/dist.js'
    },
    module: {
        loaders: [{
                test: '/\.html$/',
                loader: 'html-loader'
            },
            {
                test: '/\.ejs$/',
                loader: 'ejs-loader'
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            title: '7-html',
            filename: './7-html/dist/dist.html',
            template: './7-html/src/index.ejs'
        })
    ]
}