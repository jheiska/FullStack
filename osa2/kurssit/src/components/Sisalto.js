import React from 'react'
// import Osa from './Osa'

// yhyy ei toimi :(

const Sisalto = (kurssi) => 
        kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)

export default Sisalto;