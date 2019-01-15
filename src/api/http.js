import axios from 'axios';
import qs from 'qs';
const serverUrl =   process.env.NODE_ENV === 'development' ? 
                        'https://www.easy-mock.com/mock/5c381e76b754282ba8185fff/baldmusic' :
                    process.env.NODE_ENV === 'production' ?
                        '正式接口' :
                        `http://localhost:${process.env.PORT || 3000}`
axios.defaults.baseURL = serverUrl;
axios.defaults.timeout = 5000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 
axios.interceptors.request.use(config => {
  // loading
  return config
})
axios.interceptors.response.use(function (res) {
    // Do something with response data
    return res;
  }, function (error) {
    // Do something with res error
    return Promise.reject(error);
  });
const fetch = (opts, data) => {
    let httpDefaultOpts = { //http默认配置
          method:opts.method,
          url: opts.url,
          timeout: 10000,
          params:data,
          data:qs.stringify(data),
          headers: opts.method === 'get'?{
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
    }
 
    if(opts.method === 'get'){
      delete httpDefaultOpts.data
    }else{
      delete httpDefaultOpts.params
    }
    
    let promise = new Promise(function(resolve, reject) {
      axios(httpDefaultOpts).then(
        (res) => {
          resolve(res)
        }
      ).catch(
        (response) => {
          reject(response)
        }
      )
 
    })
  return promise
}
export default fetch;