import { combineReducers } from 'redux'
import UserReducer from './reducers/user'

const rootReducer = combineReducers({
  userData: UserReducer,
})

export default rootReducer
