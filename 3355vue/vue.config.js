<<<<<<< HEAD
module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true
            }
            
        },
    },
}
=======
module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true
            }
        }
    },
}
>>>>>>> branch 'master' of https://github.com/TSKWAK/3355project.git
