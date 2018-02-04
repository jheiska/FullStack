import React from 'react'


const Osa = ({ props }) => {
    const nimi = props.nimi
    const tehtavat = props.tehtavat
    return(
            <li>{nimi} {tehtavat}</li>
    )
}

const Sisalto = ({ osat }) => { 
    const lista = () => {
        osat.map(osa => 
    <Osa key={osa.id} 
    nimi={osa.nimi} 
    tehtavat={osa.tehtavat}/>
    )
}
    return(
            lista()
    )
}

export default Sisalto;