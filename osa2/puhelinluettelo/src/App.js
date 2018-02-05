import React from 'react';
import Entry from './components/Entry'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      limiter: ''
    }
  }

componentDidMount() {
  axios
    .get('http://localhost:3001/persons')
    .then(response=> {
      this.setState( {persons: response.data})
    })
  }


  names = () => (this.state.persons.map(person => person.name))

  addPerson = (event) => {
    event.preventDefault()
    
    if (!this.names().includes(this.state.newName)) {

    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }   
    
    const persons = this.state.persons.concat(person)
    
    axios
      .post('http://localhost:3001/persons', person)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
    
    }
  }
    

    handleNameChange = (event) => {
      this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
      this.setState({ newNumber: event.target.value })
    } 

    handleLimiter = (event) => {
      this.setState({ limiter: event.target.value})
    }

    

  render() {
    const personsToShow =
      this.state.limiter.length === 0 ?
      this.state.persons :
      this.state.persons.filter(person => 
        person.name.toLowerCase().includes(this.state.limiter.toLowerCase()))
    
        return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: 
            <input 
            value={this.state.limiter}
            onChange={this.handleLimiter} 
          />
        </div>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
          <input 
            value={this.state.newName}
            onChange={this.handleNameChange} 
          />
          </div>
          <div>
            numero:
          <input 
            value={this.state.newNumber}
            onChange={this.handleNumberChange} 
          />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {personsToShow.map(person => <Entry key={person.name} person={person} />)}
      </div>
    )
  }
}

export default App