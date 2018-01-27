import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.otsikko}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return(
        <div>
            <p><Osa osa={props.osa1} tehtavat={props.tehtavat1} /></p>
            <p><Osa osa={props.osa2} tehtavat={props.tehtavat2} /></p>
            <p><Osa osa={props.osa3} tehtavat={props.tehtavat3} /></p>
        </div>
    )
}

const Osa = (props) => {
    return(
        <div>
            <p>{props.osa} {props.tehtavat}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return(
        <div>
            <p>yhteensa {props.t1+ props.t2 + props.t3} tehtavaa</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
        <Otsikko otsikko={kurssi} />
        <Sisalto osa1={osa1} tehtavat1={tehtavia1} 
        osa2={osa2} tehtavat2={tehtavia2} 
        osa3={osa3} tehtavat3={tehtavia3} />     
        <Yhteensa t1={tehtavia1} t2={tehtavia2} t3={tehtavia3} />
        </div>
    )
}


ReactDOM.render(
<App />, 
document.getElementById('root')
)
