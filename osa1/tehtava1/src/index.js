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
            <p>Yhteensa {props.t1+ props.t2 + props.t3} tehtavaa</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    } 
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }

    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }
    return (
        <div>
        <Otsikko otsikko={kurssi} />
        <Sisalto osa1={osa1.nimi} tehtavat1={osa1.tehtavia} 
        osa2={osa2.nimi} tehtavat2={osa2.tehtavia} 
        osa3={osa3.nimi} tehtavat3={osa2.tehtavia} />     
        <Yhteensa t1={osa1.tehtavia} t2={osa2.tehtavia} t3={osa3.tehtavia} />
        </div>
    )
}


ReactDOM.render(
<App />, 
document.getElementById('root')
)
