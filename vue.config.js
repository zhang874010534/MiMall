module.exports = {
  publicPath:'./',
  devServer: {
    // proxy: {
    //   "/api": {
    //     // 这里肯定写的是生产环境下的请求地址
    //     target: "https://www.taobao.com/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "/api": ""
    //     }
    //   }
    // }
  },

  lintOnSave: false
};
