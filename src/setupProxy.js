const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = app => {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:3100',
        changeOrigin: true
    })),
        // 多个文件就继续往下写
    app.use('/file', createProxyMiddleware({
        target: 'http://localhost:3100',
        changeOrigin: true
    }))
}