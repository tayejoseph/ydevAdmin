import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const alterHireEd = (data) => ({
  type: types.alterHireEd,
  data,
})

export const getHireEd = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('higer_education/')
    if (status === 200) {
      dispatch(alterHireEd(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altHireEd = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`higer_education/${id}`)
        : await axios.put(`higer_education/${id}`, { id, ...data })
    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} contact`,
      )
      await dispatch(getHireEd())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
