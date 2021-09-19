import { combineReducers } from 'redux'
import UserReducer from './reducers/user'
import AdminReducer from './reducers/admin'

const rootReducer = combineReducers({
  userData: UserReducer,
  adminData: AdminReducer,
})

export default rootReducer
