module.exports = {
  lintOnSave: true,
  devServer: {
    // 正向代理处理跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
      }
    }
  }   
}