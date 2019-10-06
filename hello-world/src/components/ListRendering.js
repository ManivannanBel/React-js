import React from 'react'
import Person from './Person'

function ListRendering() {
    let persons = [
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

    //Key is a special string attribute you need to include while creating lists
    //It gives the element a stable identity
    //Keys help React to identify which items have changed, or added, or removed
    //Help in efficient update of UI rendering
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    
    return (
        <div>
            {personList}
        </div>
    )
}



export default ListRendering

