import TYPES from '../types'

const initState = {
  usersData: '',
  roles: '',
  borrowersLists: '',
  planLists: '',
  creditLists: '',
  missedRepaymentLists: '',
  principalOutstandingLists: '',
  authenticated: false,
}

const AuthReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case TYPES.clearState:
      return initState
    case TYPES.altAuthState:
      return {
        ...state,
        authenticated: data,
      }
    case TYPES.altPrincipalOutstanding:
      return {
        ...state,
        principalOutstandingLists: data,
      }
    case TYPES.altMissedRepayment:
      return {
        ...state,
        missedRepaymentLists: data,
      }
    case TYPES.altCreditsData:
      return {
        ...state,
        creditLists: data,
      }
    case TYPES.altUsersData:
      return {
        ...state,
        usersData: data,
      }
    case TYPES.altRoles:
      return {
        ...state,
        roles: data,
      }
    case TYPES.altPlanData:
      return {
        ...state,
        planLists: data,
      }
    case TYPES.altBorrowersLists:
      return {
        ...state,
        borrowersLists: data,
      }
    default:
      return state
  }
}

export default AuthReducer
