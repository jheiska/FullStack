import React from 'react'

const Osa = ({ props }) => {
    return(
            <li>{props.nimi} {props.tehtavat}</li>
    )
}

export default Osa;