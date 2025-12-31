import axios from 'axios'

const request = axios.create({
  // import.meta.env 是 Vite 提供的获取环境变量的方式
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

// 请求拦截器：自动加 token
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    console.log("token: " + token)
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

// 响应拦截器（可选）
request.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default request
