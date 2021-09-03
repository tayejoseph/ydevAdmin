import produce from 'immer'

const initState = {
  childrenLists: [],
  orderLists: [],
}

const UserReducer = produce((draftState, action) => {
  let index
  const { type, data, actionType } = action
  switch (type) {
    case 'CHILDREN_LISTS':
      if (actionType === 'add') {
        draftState.childrenLists.push(data)
      } else {
        index = draftState.childrenLists.findIndex(
          (item) => item.id === data.id,
        )
        if (actionType === 'delete') {
          delete draftState.childrenLists[index]
        } else {
          draftState.childrenLists[index] = data
        }
      }
      break
    case 'OREDER_LISTS':
      if (actionType === 'add') {
        draftState.orderLists.push(data)
      } else {
        index = draftState.orderLists.findIndex((item) => item.id === data.id)
        if (actionType === 'delete') {
          delete draftState.orderLists[index]
        } else {
          draftState.orderLists[index] = data
        }
      }
      break
    default:
      return draftState
  }
}, initState)

export default UserReducer
