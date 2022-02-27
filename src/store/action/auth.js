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

export const getDashboardData = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('dashboard')
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

export const getDashboardGraph = async ({ month, year }) => {
  let url = `dashboard/graph?`

  try {
    url += month ? `month=${month}` : `year=${year}`

    return await axios.get(url)
  } catch ({ response }) {
    handleError(response)
  }
}

export const handleSignIn = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post('/user/login', data)
    if (status === 200) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `${response.token_type} ${response.access_token}`

      Cookies.set('ydev_token', JSON.stringify(response))
      message.success('Logged in successfully')
      dispatch(altAuthState(true))
      dispatch(getDashboardData())
    }
  } catch ({ response }) {
    console.log({ response })
    handleError(response)
  }
}
