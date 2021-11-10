// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'
import { message } from 'antd'

const altAlumini = (data) => ({
  type: types.altAlumini,
  data,
})

export const getAlumini = () => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get('alumini')
    console.log({ status, response, ...rest }, 'sdljksdskdj')
    if (status === 200) {
      dispatch(altAlumini(response))
    }
    console.log(response, 'Job response')
  } catch ({ response }) {
    handleError(response)
  }
}

export const alterAlumini = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'delete'
        ? await axios.delete(`alumini/${id}`)
        : await axios.put(`alumini/${id}`, { id, ...data })

    if (status === 200) {
      message.success(
        `Sucessfull ${action === 'delete' ? 'deleted' : 'updated'} Alumini`,
      )
      await dispatch(getAlumini())
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
