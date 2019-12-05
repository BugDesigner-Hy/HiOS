// vue.config.js
module.exports = {
    lintOnSave: false,
    devServer:{
        open: false, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8080',
        https: false,
        hotOnly: false, 
        proxy: {
            '/weather': {
                target: 'https://www.tianqiapi.com/', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/weather': '/'
                }
            },
            '/music': {
                target: 'http://36.103.242.204:3000/', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/music': '/'
                }
            }
        },
    }
}