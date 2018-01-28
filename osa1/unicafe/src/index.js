import React from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => (
<div>
<p>Hyviä: {props.hyva}</p>
<p>Neutraaleja: {props.neutraali}</p>
<p>Huonoja: {props.huono}</p>
</div>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            hyva : 0,
            neutraali: 0,
            huono: 0
        }
    }
        paivitaHyva = (arvo) => () => this.setState({ hyva: arvo})
        paivitaNeutraali = (arvo) => () => this.setState({neutraali: arvo})
        paivitaHuono = (arvo) => () => this.setState({huono: arvo})
    
        render() {
            return (
              <div>
                <Display hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono} />
                     
                <Button
                  handleClick={this.paivitaHyva(this.state.hyva + 1)}
                  text="Hyvä"
                />
                <Button
                  handleClick={this.paivitaNeutraali(this.state.neutraali + 1)}
                  text="Neutraali"
                />
                <Button
                  handleClick={this.paivitaHuono(this.state.huono + 1)}
                  text="Huono"
                />  
              </div>
            )
          }


}

ReactDOM.render(<App />, document.getElementById('root'));