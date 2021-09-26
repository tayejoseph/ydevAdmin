import axios from 'axios'
import Cookies from 'js-cookie'
import { logOutHander } from '../store/action'
import { store } from '../'
import { message } from 'antd'

const server = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
})

server.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

server.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    // if (err.response.status === 403) {
    //   Cookies.remove('token')
    //   message.warning('Your Session has Expired kindly Login again')
    //   setTimeout(() => {
    //     store.dispatch(logOutHander())
    //   }, 500)
    // } else {
    //   return Promise.reject(err)
    // }
    // NProgress.done()
  },
)

export default server
