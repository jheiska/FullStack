import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'



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
    if (hyva === 0 && neutraali === 0 && huono === 0){
       return (
           <div>
           <p>Ei yhtään palautetta annettu</p> 
           </div>
       )
    } else {
   
    return (
    <div>
        <table>
            <tbody>
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
            </tbody>
        </table>
    </div>
    )
    }
}

const Statistic = ({stat, hyva, neutraali, huono}) => {  
    if (stat === 'keskiarvo') {
        return (
        <Keskiarvo hy={hyva} 
        ne={neutraali}
        hu={huono}
        />
        )
    } else
    if (stat === 'positiivisia') {
        return (
        <Positiivisia hy={hyva} 
        ne={neutraali}
        hu={huono}
        />
        )
    } else
    if (stat === 'hyvia') {
        return (
            <tr><td>Hyviä: {hyva}</td></tr>
        )
    } else
    if (stat === 'neutraaleja') {
        return (
            <tr><td>Neutraaleja: {neutraali}</td></tr>
        )
    } else
    if (stat === 'huonoja') {
        return (
            <tr><td>Huonoja: {huono}</td></tr>
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
        <tr><td>
            Keskiarvo: {Math.round((hy - hu) / (hy + hu + ne) * 10) / 10}
        </td></tr>
)    
}

const Positiivisia = ({ hy, hu, ne }) => {
    return(
        <tr><td>
        Positiivisia: {Math.round(hy / (hy + hu + ne) * 1000) / 10} %
        </td></tr>
)   
}


const store = createStore(reducer)

class App extends React.Component {
    constructor(){
        super()
  /*
        this.state = {
            hyva : 0,
            neutraali: 0,
            huono: 0
     }
     */
    }


      
        paivitaTila = (tila) => () => {
            if (tila === 'hyva') {
 //               this.setState({hyva: arvo})
                store.dispatch({type: 'GOOD'})
            }
            if (tila === 'neutraali') {
                store.dispatch({type: 'OK'})
//                this.setState({neutraali: arvo})
            }
            if (tila === 'huono') {
                store.dispatch({type: 'BAD'})
//                this.setState({huono: arvo})
            }
            if (tila === 'nollaa') {
                store.dispatch({type: 'ZERO'})
/*
                this.setState({
                    hyva : 0,
                    neutraali: 0,
                    huono: 0
                })
*/                
            }
        }

        render() {

            return (
                <div>
                <Display 
                    hyva={store.getState().good}
                    neutraali={store.getState().ok}
                    huono={store.getState().bad} 
                />
              
                <Button
                    handleClick={this.paivitaTila('hyva')}
                    text="Hyvä"
                />
                <Button
                    handleClick={this.paivitaTila('neutraali')}
                    text="Neutraali"
                />
                <Button
                    handleClick={this.paivitaTila('huono')}
                    text="Huono"
                />  
                <Button
                    handleClick={this.paivitaTila('nollaa')}
                    text="Nollaa"
                />  
                
              </div>
            )
          }


}

const renderApp = () => {
ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)