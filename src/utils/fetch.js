import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

// 创建axios实例
let httpL=''
if(window.location.href.indexOf('https')>=0){
    httpL='https://'
}
else{
    httpL='http://'
}
let httpName=httpL+window.location.host;
let BASE_API='http://localhost:1442/api';
if(httpName.indexOf('localhost')=='-1'){
    BASE_API=httpName+'/API/105/api/'
}
const service = axios.create({
        //baseURL:location.hostname=='localhost'?'':process.env.BASE_API, // 跨域情况
        baseURL:BASE_API, // api的base_url
        timeout: 30000, // 请求超时时间
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    // request拦截器
service.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    if (true) {
        config.headers['Authorization'] = "ticket " + '123' // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         *
         */
        const res = response.data
        let data = JSON.parse(res);
        //let data = res
        if (!data.isSuccess) {
            message.error(data.msg);
            return Promise.reject('error')
        } else {
            return data
        }
    },
    error => {
        console.log('err' + error) // for debug
        message.error(error.message);
        return Promise.reject(error)
    }
)
export default service