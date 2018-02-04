import React from 'react'

// tällä piti leikkiä sisältöön, ei tullu mitään

const Osa = ({ props }) => {
    return(
            <li>{props.nimi} {props.tehtavat}</li>
    )
}

export default Osa;