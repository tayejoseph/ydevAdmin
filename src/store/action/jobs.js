// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'

const altJobApplication = (data) => ({
  type: types.altJobApplication,
  data,
})

export const getJobApplications = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get(
      'job-application',
    )
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altJobApplication(response))
    }
    console.log(response, 'Job response')
  } catch ({ response }) {
    handleError(response)
  }
}

export const postJobApplications = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.post(
      'job-application',
      data,
    )
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      await dispatch(getJobApplications())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterJobApplication = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response, ...rest } =
      action === 'delete'
        ? await axios.delete(`job-application/${id}`)
        : await axios.put(`job-application/${id}`, { id, ...data })
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      await dispatch(getJobApplications())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
