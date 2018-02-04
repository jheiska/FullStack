import React from 'react'
// import Otsikko from './Otsikko'
// import Sisalto from './Sisalto'


const Kurssi = ( {kurssi} ) => {
    const osat = kurssi.osat
    const lista = () => 
        osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
    //const lista = () => <Sisalto sisalto={osat} />
    
    return (
        <div>
            <h1>
            {kurssi.nimi}           
            </h1>
            <ul>
            {lista()}
            </ul>
        </div>
    )
}

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



export default Kurssi;