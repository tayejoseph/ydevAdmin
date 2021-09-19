import { adminTypes } from '../types'

const initState = {
  usersData: '',
  roles: '',
  borrowersLists: '',
  planLists: '',
  creditLists: '',
  missedRepaymentLists: '',
  principalOutstandingLists: '',
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case adminTypes.altPrincipalOutstanding:
      return {
        ...state,
        principalOutstandingLists: data,
      }
    case adminTypes.altMissedRepayment:
      return {
        ...state,
        missedRepaymentLists: data,
      }
    case adminTypes.altCreditsData:
      return {
        ...state,
        creditLists: data,
      }
    case adminTypes.altUsersData:
      return {
        ...state,
        usersData: data,
      }
    case adminTypes.altRoles:
      return {
        ...state,
        roles: data,
      }
    case adminTypes.altPlanData:
      return {
        ...state,
        planLists: data,
      }
    case adminTypes.altBorrowersLists:
      return {
        ...state,
        borrowersLists: data,
      }
    default:
      return state
  }
}

export default UserReducer
