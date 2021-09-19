import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altCreditsData = (data) => ({
  type: adminTypes.altCreditsData,
  data,
})

const altMissedRepayment = (data) => ({
  type: adminTypes.altMissedRepayment,
  data,
})

const altPrincipalOutstanding = (data) => ({
  type: adminTypes.altPrincipalOutstanding,
  data,
})

export const getCredits = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/credit/all',
    )
    if (status === 200) {
      dispatch(altCreditsData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getMissedRepayment = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/credit/missed-repayments',
    )
    if (status === 200) {
      dispatch(altMissedRepayment(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPrincipalOutStanding = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/credit/principal-outstanding',
    )
    if (status === 200) {
      dispatch(altPrincipalOutstanding(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
