module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        // 匹配所有以 '/dev-api'开头的请求路径
        target: 'http://localhost:3001', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
  },
}
