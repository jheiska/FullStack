import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        pisteet: [0, 0, 0, 0, 0, 0]
      }
    }

    paivitaTila = (uusitila) => () => {
        if (uusitila < 6){
        this.setState({selected: uusitila})
    } else
        this.setState({selected: 0})
    }

    pisteAnekdootille = (anekdootti) => () => {
        const kopio = [...this.state.pisteet]
        kopio[anekdootti] += 1
        this.setState({pisteet: kopio})
    }

    render() {
      return (
        <div>
            <p>Satunnainen anekdootti:</p>
            <p>{this.props.anecdotes[this.state.selected]}</p>
            <p>Anekdootin pisteet: {this.state.pisteet[this.state.selected]}</p>
            <Button handleClick={this.paivitaTila(Math.floor(Math.random() * this.props.anecdotes.length))}
                    text="Uusi random anekdootti"
            />
            <Button handleClick={this.paivitaTila(this.state.selected+1)} 
                    text="Seuraava anekdootti"
            />
            <Button handleClick={this.pisteAnekdootille(this.state.selected)}
                    text="Anna piste tälle anekdootille"
            />        
        </div>
      )
    }
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )