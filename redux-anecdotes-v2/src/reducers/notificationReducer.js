//import Notification from '../components/Notification'

const initialState = [
  'Done!'
]

const reducer = (store = initialState, action) => {
  if (action.type==='VOTED') {
    return store
  }
  if (action.type==='CREATED'){
    return store
  }

  return store
}

export default reducer
