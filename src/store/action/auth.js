import { message } from 'antd'
import Cookies from 'js-cookie'
import { handleError, axios } from '../../lib'
import TYPES from '../types'

export const altAuthState = (data) => ({
  type: TYPES.altAuthState,
  data,
})

export const altUserDetails = (data) => ({
  type: TYPES.altUserDetails,
  data,
})

export const logOutHander = () => ({
  type: TYPES.clearState,
})

export const getUserDetails = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get(
      '/api/v1/auth/user',
    )
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altUserDetails(response.data))
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}

export const getDashboardData = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get('dashboard')
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch({
        type: TYPES.altDashboard,
        data: response,
      })
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const handleSignIn = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.post(
      '/user/login',
      data,
    )
    console.log({ response, rest, status }, 'NnNNNN')
    if (status === 200) {
      axios.defaults.headers.common.Authorization = `Bearer ${response.access_token}`
      Cookies.set('token', response.access_token)
      message.success('Logged in successfully')
      dispatch(altAuthState(true))
      dispatch(getDashboardData())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
