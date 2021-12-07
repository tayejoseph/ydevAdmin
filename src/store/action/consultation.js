// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'
import { message } from 'antd'

const altConsultation = (data) => ({
  type: types.altConsultation,
  data,
})

export const getConsultation = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get(
      'schedule-consultation/',
    )
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altConsultation(response))
    }
    console.log(response, 'Job response')
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterConsultation = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'delete'
        ? await axios.delete(`schedule-consultation/${id}`)
        : await axios.put(`schedule-consultation/${id}`, { id, ...data })

    if (status === 200) {
      message.success(
        `Sucessfull ${
          action === 'delete' ? 'deleted' : 'updated'
        } schedule-consultation`,
      )
      await dispatch(getConsultation())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
