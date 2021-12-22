// Jobs
import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const altJobApplication = (data) => ({
  type: types.altJobApplication,
  data,
})

export const getJobApplications = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('job-application/')
    if (status === 200) {
      return response
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterJobApplications = async ({ id, ...data }, action) => {
  try {
    return action === 'delete'
      ? await axios.delete(`job-application/${id}`)
      : await axios.put(`job-application/${id}`, { id, ...data })
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPostedJobs = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('job/')
    if (status === 200) {
      dispatch(altJobApplication(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPostedJobDetail = async (id) => {
  try {
    return await axios.get(`job/${id}`)
  } catch ({ response }) {
    handleError(response)
  }
}

export const createJobApplications = (data) => async (dispatch, getState) => {
  try {
    const { status } = await axios.post('job', data)
    if (status === 200) {
      message.success('Successfully created a job')
      await dispatch(getPostedJobs())
      return {
        success: true,
      }
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterJobPost = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`job/${id}`)
        : await axios.put(`job/${id}`, { id, ...data })
    if (status === 200) {
      await dispatch(getPostedJobs())
      return {
        success: true,
      }
    }
  } catch ({ response }) {
    handleError(response)
  }
}
