import React from 'react';
import Entry from './components/Entry'
import Notification from './components/Notification'
import axios from 'axios'
import personService from './services/persons'
const baseUrl = '/api/persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      limiter: '',
      alert: null
    }
  }

componentDidMount() {
  axios
    .get(baseUrl)
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
    
    personService
      .create(person)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(newPerson),
          newName: '',
          newNumber: '',
          alert: 'puhelinnumero lisätty onnistuneesti'
        })
      })
    
    setTimeout(() => {
      this.setState({alert: null})
    }, 5000)
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

    deleteEntry = (id) => {
      return () => {
      if (window.confirm('Haluatko varmasti poistaa?')){
        personService
        .deleteEnt(id)
        .then(this.setState({
          persons: this.state.persons.filter(p => p.id !== id),
          alert: 'poistettu!'
        }))
        setTimeout(() => {
          this.setState({alert: null})
        }, 5000)
        }
      }
      
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
        <Notification message={this.state.alert}/>
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
        {personsToShow.map(person => 
        <Entry key={person.name} person={person} deleteEntry={this.deleteEntry(person.id)} />)}
      </div>
    )
  }
}

export default App