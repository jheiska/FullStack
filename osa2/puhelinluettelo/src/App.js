import React from 'react';
import Entry from './components/Entry'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '666' },
          { name: 'Arto Artsila',
          number: '667' },
          { name: 'Kalle Prospektori',
          number: '1234' },
          { name: 'Kalle Anka',
          number: '313' }
      ],
      newName: '',
      newNumber: '',
      limiter: ''
    }
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
    
    this.setState({
      persons: persons,
      newName: '',
      newNumber: ''
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