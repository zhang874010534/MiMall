let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = '/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mi.futurefe.com/api';
    break;
}
console.log(baseURL)
export default baseURL;
