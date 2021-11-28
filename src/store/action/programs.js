// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'

const altPrograms = (data) => ({
  type: types.altPrograms,
  data,
})

export const getPrograms = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('program')
    if (status === 200) {
      dispatch(altPrograms(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterPrograms = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response, ...rest } =
      action === 'delete'
        ? await axios.delete(`program/${id}`)
        : await axios.put(`program/${id}`, { id, ...data })
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      await dispatch(getPrograms())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
