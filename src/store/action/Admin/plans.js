import { message } from 'antd'
import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altPlanData = (data) => ({
  type: adminTypes.altPlanData,
  data,
})

export const getPlans = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('/api/v1/admin/plan/all')
    if (status === 200) {
      dispatch(altPlanData(response.data))
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPlans = ({ id, ...formData }, actionType) => async (
  dispatch,
  getState,
) => {
  console.log(actionType, 'sjdksdjskdjdksjk')
  try {
    let errorMsg = ''
    const { status, data: response } =
      actionType === 'add'
        ? await axios.post('/api/v1/admin/plan/create', formData)
        : await axios.post(`/api/v1/admin/plan/update/${id}`, formData)
    console.log({ status, response }, 'sdljksdskdj')
    if (status === 200) {
      if (response.status === 'fail' && response.error) {
        Object.keys(response.error).map((item) => {
          errorMsg = `${errorMsg} ${response.error[item]}`
        })
        message.error(errorMsg)
        return
      } else {
        await dispatch(getPlans())
        message.success(response.details)
        return {
          success: true,
        }
      }
    }
    console.log(response, 'Sdjskdskj')
  } catch ({ response }) {
    handleError(response)
  }
}
