import React from 'react'
// import Otsikko from './Otsikko'
// import Sisalto from './Sisalto'


const Kurssi = ({kurssi}) => {
    const lista = () => 
        kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
    //const lista = () => <Sisalto sisalto={osat} />
    
    return (
        <div>
            <h1>
            {kurssi.nimi}           
            </h1>
            <ul>
            {lista()}
            </ul>
            <div>
            <p>Yhteensä {TehtaviaYhteensa(kurssi)} tehtavaa</p>
            </div>
        </div>
    )
}

const TehtaviaYhteensa = (kurssi) => kurssi.osat.reduce(function(sum, osat){
    return (sum + osat.tehtavia)
}, 0)

/*
const Sisalto = ({ osat }) => { 
    const sisalto = () => 
        osat.map((osa) => {
        <li key={osa.id}>{osa.nimi} {osa.tehtavat}</li>
        }
        )
        return (
            sisalto()
    )
}
*/

export default Kurssi