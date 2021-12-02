import axios from 'axios'
import Cookies from 'js-cookie'
import { logOutHander } from '../store/action'
import { store } from '../'
import { message } from 'antd'

const server = axios.create({
  baseURL: 'https://secret-oasis-97701.herokuapp.com/api',
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
    const state = store.getState()
    if (err && err.response) {
      if (
        (err.response.status === 403 || err.response.status === 401) &&
        state.AuthReducer.authenticated
      ) {
        Cookies.remove('token')
        message.warning('Your Session has Expired kindly Login again')
        setTimeout(() => {
          store.dispatch(logOutHander())
        }, 500)
        return
      }
      return Promise.reject(err)
    }
  },
)

export default server
