import { message } from 'antd'
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

export const handleSignIn = (data) => async (dispatch, getState) => {
  try {
    // const { status, data: response, ...rest } = await axios.post(
    //   '/api/v1/auth/auth',
    //   data,
    // )

    // if (status === 200) {
    //   axios.defaults.headers.common.Authorization = `Bearer ${response.token}`
    //   await dispatch(getUserDetails())
    //   await dispatch(getRoles())
    //   message.success(response.details)
    //   Promise.all([
    //     dispatch(getUsers(), dispatch(getPlans()), dispatch(getCredits())),
    //   ])
    dispatch(altAuthState(true))
    // } else {
    // }
  } catch ({ response }) {
    handleError(response)
  }
}
