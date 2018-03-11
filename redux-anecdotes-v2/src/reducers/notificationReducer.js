//import Notification from '../components/Notification'

const initialState = [
  'Welcome to the anecdote app!'
]

const reducer = (store = initialState, action) => {
  if (action.type==='VOTE') {
    return 'Voted!'
  }
  if (action.type==='CREATE'){
    return 'Created!'
  }
  if (action.type==='CLEAR'){
    return null
  }

  return store
}

export const vote = () => {
  return {
    type: 'VOTE'
  }
}

export const create = () => {
  return {
    type: 'CREATE'
  }
} 

export default reducer
