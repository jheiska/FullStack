import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  names = () => (this.state.persons.map(person => person.name))


  addPerson = (event) => {
    event.preventDefault()
    
    if (!this.names().includes(this.state.newName)) {

    const person = {
      name: this.state.newName
    }   

    
    const persons = this.state.persons.concat(person)
    
    this.setState({
      persons: persons,
      newName: ''
    })
    }
    }
    

    handleNameChange = (event) => {
      this.setState({ newName: event.target.value })
    } 


  render() {
    return (
      <div>
        <div>
          debug: {this.state.newName}
        </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
          </div>
          <div>
          <input 
            value={this.state.newName}
            onChange={this.handleNameChange} 
          />
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}

      </div>
    )
  }
}

export default App