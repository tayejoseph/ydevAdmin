import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const alterApplication = (data) => ({
  type: types.alterApplication,
  data,
})

export const getApplications = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('apply_now')
    if (status === 200) {
      dispatch(alterApplication(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altApplication = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`apply_now/${id}`)
        : await axios.put(`apply_now/${id}`, { id, ...data })
    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} application`,
      )
      await dispatch(getApplications())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
