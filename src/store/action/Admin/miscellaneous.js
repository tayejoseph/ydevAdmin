import { axios, handleError } from '../../../lib'
import { adminTypes } from '../../types'

const altRoles = (data) => ({
  type: adminTypes.altRoles,
  data,
})

export const getRoles = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/roles/all',
    )
    console.log({ response, status }, 'sdjksdskj')
    if (status === 200) {
      dispatch(altRoles(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
