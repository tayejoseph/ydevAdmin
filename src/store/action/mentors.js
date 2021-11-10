// Jobs
import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const altMentors = (data) => ({
  type: types.altMentors,
  data,
})

export const getMentors = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('mentorship')
    if (status === 200) {
      dispatch(altMentors(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterMentors = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`mentorship/${id}`)
        : await axios.put(`mentorship/${id}`, { id, ...data })
    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} contact`,
      )
      await dispatch(getMentors())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
