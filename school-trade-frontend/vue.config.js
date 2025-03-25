const webpack = require('webpack')

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        port: 8081,
    },
    devServer: {
        proxy: {
            '/api':{
                target:'http://60.204.159.70:8081',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
};