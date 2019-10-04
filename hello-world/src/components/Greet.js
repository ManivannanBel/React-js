//Functional Compenent
//props are immutable
import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h1>
                Hello {props.fname} {props.lname}
            </h1>
            {props.children}
            <p>
                Functional Compenent
            </p>
        </div>)
}
export default Greet