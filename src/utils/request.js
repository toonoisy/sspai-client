import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 20000,
})

service.interceptors.request.use((config) => {
  // config.headers.content - type = 'text/html;charset=utf-8'
  return config
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    alert('发送请求失败' + error.message || '未知错误')
    return new Promise(() => {})
  }
)

export default service
