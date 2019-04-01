module.exports = {
    configureWebpack: {
        devServer: {
            proxy:{
                "/api":{
                    target:"https://api.bzqll.com",
                    pathRewrite:{"^/api": ""},
                    changeOrigin: true
                }
            }
        }
    }
}
