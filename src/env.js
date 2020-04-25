// 环境设置
let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = '/api/';
    break;
  case 'production':
    baseURL='http://www.taobao.com';
    break;
}

export default baseURL