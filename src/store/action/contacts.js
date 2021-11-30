// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'

const altContacts = (data) => ({
  type: types.altContacts,
  data,
})

export const getContacts = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get('get-in-touch/')
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altContacts(response))
    }
    console.log(response, 'Job response')
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterContacts = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'delete'
        ? await axios.delete(`get-in-touch/${id}`)
        : await axios.put(`get-in-touch/${id}`, { id, ...data })
    if (status === 200) {
      await dispatch(getContacts())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
