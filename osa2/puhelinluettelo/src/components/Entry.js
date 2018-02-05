import React from 'react';


const Entry = ({ person, deleteEntry }) => {
    const label = 'delete'
    return (
            <li className="entry">
            {person.name} {person.number} <button onClick={deleteEntry}>{label}</button>
            </li>
    )
}

          
export default Entry