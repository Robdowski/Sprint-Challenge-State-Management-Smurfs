import React from 'react'

export default function SmurfCard(props) {
    return (
        <div>
            <h2>{props.item.name}</h2>
            <p>Age: {props.item.age}</p>
            <p>Height: {props.item.height}</p>
            <button onClick={() => props.deleteSmurf(props.item.id)}>Remove Smurf</button>
        </div>
    )
}
