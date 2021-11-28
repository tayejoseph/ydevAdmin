// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'
import { message } from 'antd'

const altCooperateTraining = (data) => ({
  type: types.altCooperateTraining,
  data,
})

export const getCooperationTraining = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get('training')
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altCooperateTraining(response))
    }
    console.log(response, 'Job response')
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterCooperateTraining = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'delete'
        ? await axios.delete(`training/${id}`)
        : await axios.put(`training/${id}`, { id, ...data })

    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} training`,
      )
      await dispatch(getCooperationTraining())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
