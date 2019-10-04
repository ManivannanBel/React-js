//React without using jsx

import React from 'react'

const Hello = () => {
    /*return (
        <div id='hello'>
            <h2>Hello</h2>
        </div>
    )*/
    return React.createElement('div', {id: 'hello'}, React.createElement('h2', null, 'Hello'))
}

export default Hello