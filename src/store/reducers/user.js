import { userTypes } from '../types'

const initState = {
  authenticated: false,
  userDetails: '',
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action

  switch (type) {
    case userTypes.clearState:
      return initState
    case userTypes.altAuthState:
      return {
        ...state,
        authenticated: data,
      }
    case userTypes.altUserDetails:
      return {
        ...state,
        userDetails: data,
      }
    default:
      return state
  }
}

export default UserReducer
