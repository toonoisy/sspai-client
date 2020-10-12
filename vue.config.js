module.exports = {
  lintOnSave: true,
  devServer: {
    //   自动打开浏览器
    open: true,
    //  处理跨域
    proxy: {
        "/api": {
            target: "http://localhost:3001",
        }
    }
  }
}