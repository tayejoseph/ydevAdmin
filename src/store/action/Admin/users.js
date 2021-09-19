import { message } from 'antd'
import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altUsersData = (data) => ({
  type: adminTypes.altUsersData,
  data,
})

export const getUserDetails = (userId) => {
  return axios.get(`/api/v1/admin/users/user-basic/${userId}`)
}

export const getUserTransactions = (userId) => {
  return axios.get(`/api/v1/admin/users/user-transactions/${userId}`)
}

export const getUserCredits = (userId) => {
  return axios.get(`/api/v1/admin/users/user-credits/${userId}`)
}

export const getUserPayment = (userId) => {
  return axios.get(`/api/v1/admin/users/user-payments/${userId}`)
}

export const getUsers = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/users/all',
    )
    if (status === 200) {
      dispatch(altUsersData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altUsers = ({ id, ...formData }, actionType) => async (
  dispatch,
  getState,
) => {
  try {
    let errorMsg = ''
    const { status, data: response } =
      actionType === 'add'
        ? await axios.post('/api/v1/admin/users/create', formData)
        : await axios.post(`/api/v1/admin/users/update/${id}`, {
            id,
            ...formData,
          })
    if (status === 200) {
      if (response.status === 'fail' && response.error) {
        Object.keys(response.error).map((item) => {
          errorMsg = `${errorMsg} ${response.error[item]}`
        })
        message.error(errorMsg)
        return
      } else {
        await dispatch(getUsers())
        message.success(response.details)
        return {
          success: true,
        }
      }
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altBanUsers = (id, actionType) => async (dispatch, getState) => {
  try {
    const { status, data: response } =
      actionType === 'ben'
        ? await axios.post(`/api/v1/admin/users/ban/${id}`)
        : await axios.post(`/api/v1/admin/users/un-ban/${id}`)
    console.log({ status, response }, 'sdljksdskdj')
    if (status === 200) {
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}

export const sendSms = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post(
      `/api/v1/admin/users/send-sms`,
      data,
    )
    if (status === 200 && response && response.status === 'success') {
      message.success(response.details, 2)
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const sendEmail = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post(
      `/api/v1/admin/users/send-email`,
      data,
    )
    console.log(response, 'ksdlkdlsdk')
    if (status === 200 && response && response.status === 'success') {
      message.success(response.details, 2)
    }
  } catch ({ response }) {
    handleError(response)
  }
}
