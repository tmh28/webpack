var webpack = require('webpack');
module.exports = {
    entry: './8-jquery/src/entry.js',
    output: {
        filename: "./8-jquery/dist/dist.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
}