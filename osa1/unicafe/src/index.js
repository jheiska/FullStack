import React from 'react';
import ReactDOM from 'react-dom';

const Display = ({hyva, neutraali, huono}) => (
<div>
    <h1> Anna palautetta alareunan napeilla</h1>
    <h2>Palautteet tähän mennessä:</h2>
    <Statistics
        hyva={hyva} 
        neutraali={neutraali}
        huono={huono}
    />
</div>
  
)

const Statistics = ({hyva, neutraali, huono}) => {
   return (
    <div>
        <Statistic 
            stat = {'hyvia'}
            hyva={hyva}
        />
        <Statistic
            stat = {'neutraaleja'}
            neutraali={neutraali}
        />
        <Statistic
            stat = {'huonoja'}
            huono ={huono}
        /> 
        <Statistic
            stat = {'keskiarvo'}
            hyva={hyva} 
            neutraali={neutraali}
            huono={huono}
        />
        <Statistic 
            stat = {'positiivisia'}
            hyva={hyva} 
            neutraali={neutraali}
            huono={huono}
        />
    </div>
   )
}

const Statistic = ({stat, hyva, neutraali, huono}) => {
    
    if (stat === 'keskiarvo') {
        return (
        <div>
        <Keskiarvo hy={hyva} 
        ne={neutraali}
        hu={huono}
        />
        </div>
        )
    } else
    if (stat === 'positiivisia') {
        return (
        <div>
        <Positiivisia hy={hyva} 
        ne={neutraali}
        hu={huono}
        />
        </div>
        )
    } else
    if (stat === 'hyvia') {
        return (
            <div>
            <p>Hyviä: {hyva}</p>
            </div>
        )
    } else
    if (stat === 'neutraaleja') {
        return (
            <div>
            <p>Neutraaleja: {neutraali}</p>
            </div>
        )
    } else
    if (stat === 'huonoja') {
        return (
            <div>
            <p>Huonoja: {huono}</p>
            </div>
        )
    }

}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Keskiarvo = ({ hy, hu, ne }) => {    
    return(
        <div>
            <p>Keskiarvo: {Math.round((hy - hu) / (hy + hu + ne) * 10) / 10}</p>
        </div>
)    
}

const Positiivisia = ({ hy, hu, ne }) => {
    return(
        <div>
            <p>Positiivisia: {Math.round(hy / (hy + hu + ne) * 1000) / 10} %</p>
        </div>
)   

}


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
                <Display 
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono} 
                />
              
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