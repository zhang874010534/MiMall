module.export ={
  derServer:{
    proxy:{
      '/api':{
        target:'https://www.taobao.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}