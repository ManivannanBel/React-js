import React from 'react'

function ListRendering(props) {
    
    let person = [
        {
            id : 1,
            name : 'Glen',
            role : 'Batsman'
        },
        {
            id : 2,
            name : 'Watto',
            role : 'All rounder'
        },
        {
            id : 3,
            name : 'Lee',
            role : 'Bowler'
        }
    ]

    let personList = person.map(person => <h2>I am {person.name}. My role is {person.role}</h2>)

    return (
        <div>
            {personList}
        </div>
    )
}



export default ListRendering

