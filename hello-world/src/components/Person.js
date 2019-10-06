import React from 'react'

function Person(props, key) {
    return (
        <div>
            <h2 key={key}>I am {props.person.name}. My role is {props.person.role}</h2>
        </div>
    )
}

export default Person