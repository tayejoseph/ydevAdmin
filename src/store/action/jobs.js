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
      dispatch(altJobApplication(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPostedJobs = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('job')
    if (status === 200) {
      dispatch(altJobApplication(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const createJobApplications = (data) => async (dispatch, getState) => {
  try {
    const { status } = await axios.post('job', data)
    if (status === 200) {
      message.success('Successfully created a job')
      await dispatch(getJobApplications())
      return {
        success: true,
      }
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterJobApplication = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'delete'
        ? await axios.delete(`job-application/${id}`)
        : await axios.put(`job-application/${id}`, { id, ...data })
    if (status === 200) {
      await dispatch(getJobApplications())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
