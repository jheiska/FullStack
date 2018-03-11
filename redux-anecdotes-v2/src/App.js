import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  notification = () => {
    setTimeout(() => {
      this.props.store.dispatch( {type: 'CLEAR'} )
    }, 5000)
  }


  render() {
    this.notification()
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification store={this.props.store} />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App