import axios from 'axios'
import { Message } from 'element-ui'
import Qs from 'qs'


// 创建axios实例
const service = axios.create({
  baseURL: '', // api 的 base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  transformRequest: [(data, header) => {
    data = Qs.stringify(data)
    // 'application/x-www-form-urlencoded'
    header['Content-Type'] = 'application/json'
    header['Access-Control-Allow-Origin'] = '*'
    return data
  }]
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['authorization'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response
    // const data = response.data
    // if (data.status === 20000) {
    //   return response
    // } else {
    //   Message({
    //     message: response.data.msg,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
  },
  error => {
    console.log('err' + error) // for debug
    // if (error.response.status === 403) {
    //   MessageBox.confirm('登录已过期，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //     confirmButtonText: '重新登录',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('FedLogOut').then(() => {
    //       location.reload() // 为了重新实例化vue-router对象 避免bug
    //     })
    //   })
    // } else {
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
