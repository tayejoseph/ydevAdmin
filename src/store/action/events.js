// Jobs
import { message } from 'antd'
import { axios, handleError } from '../../lib'
import types from '../types'

const altEvents = (data) => ({
  type: types.altEvents,
  data,
})

export const getEvents = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('event/')
    if (status === 200) {
      dispatch(altEvents(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addEvents = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.post('event', data)
    if (status === 200) {
      message.success('Event successfully added')
      await dispatch(getEvents(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterEvents = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status } =
      action === 'delete'
        ? await axios.delete(`event/${id}`)
        : await axios.put(`event/${id}`, { id, ...data })
    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} event`,
      )
      await dispatch(getEvents())
    }
  } catch ({ response }) {
    handleError(response)
  }
}
