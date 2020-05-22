module.exports = {
  publicPath:'./',

  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },

  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  chainWebpack:config=>{
    config.plugins.delete('prefetch')
  },
  productionSourceMap: false,
}