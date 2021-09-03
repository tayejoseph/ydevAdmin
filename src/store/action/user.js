import { CHILDREN_LISTS, OREDER_LISTS } from '../types'

export const altChildrenLists = (data, actionType) => async (
  dispatch,
  getState,
) => {
  dispatch({
    type: CHILDREN_LISTS,
    data,
    actionType,
  })
  return { response: 'success' }
}

export const altOrderLists = (data, actionType) => async (
  dispatch,
  getState,
) => {
  dispatch({
    type: OREDER_LISTS,
    data,
    actionType,
  })
  return { response: 'success' }
}
