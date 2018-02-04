import React from 'react'
import Otsikko from './Otsikko'
// import Sisalto from './Sisalto'


const Kurssi = ({kurssi}) => {
    return (
        <div>           
            {Otsikko(kurssi)}
            <ul>
            {Sisalto(kurssi)}
            </ul>
            <p>Yhteensä {TehtaviaYhteensa(kurssi)} tehtavaa</p>
        </div>
    )
}

const TehtaviaYhteensa = (kurssi) => kurssi.osat.reduce(function(sum, osat){
    return (sum + osat.tehtavia)
}, 0)

const Sisalto = (kurssi) => 
        kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)


export default Kurssi