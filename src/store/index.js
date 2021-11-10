import { combineReducers } from 'redux'
import AppReducer from './reducers/app'
import AuthReducer from './reducers/auth'

const rootReducer = combineReducers({
  AppReducer: AppReducer,
  AuthReducer: AuthReducer,
})

export default rootReducer
