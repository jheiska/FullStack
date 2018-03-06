import { createStore, combineReducers } from 'redux'
import aReducer from './reducers/anecdoteReducer'
import nReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: aReducer,
  notifications: nReducer
})

const store = createStore(reducer)

export default store