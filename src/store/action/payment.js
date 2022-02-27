// Jobs
import { axios, handleError } from '../../lib'
import types from '../types'

const altPayment = (data) => ({
  type: types.altPayment,
  data,
})

export const getEarnings = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('earnings/')
    if (status === 200) {
      dispatch(altPayment(response))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
