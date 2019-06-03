import {createStore} from 'redux'
import adminReducer from './adminReducer'
import userReducer from './userReducer'

export default createStore(adminReducer, userReducer)