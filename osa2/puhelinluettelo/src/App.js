import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '666' }
      ],
      newName: '',
      newNumber: ''
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


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
        {this.state.persons.map(person => 
        <li key={person.name}>{person.name} {person.number}</li>)}

      </div>
    )
  }
}

export default App