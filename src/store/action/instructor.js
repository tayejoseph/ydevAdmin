import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const alterInstructors = (data) => ({
  type: types.altInstructor,
  data,
})

export const getInstructors = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('instructor/')
    if (status === 200) {
      dispatch(alterInstructors(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altInstructors = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`instructor/${id}`)
        : await axios.put(`instructor/${id}`, { id, ...data })
    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} contact`,
      )
      await dispatch(getInstructors())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
