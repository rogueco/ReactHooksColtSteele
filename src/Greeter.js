import React, { Fragment } from 'react'


function Greeter ({ name, age, excitement = 1 }) {
    const greet = () => {
        alert(`Hello There, ${name}`)
    }
    return (
        <Fragment>
            <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
            <p>You are {age} years old</p>
            <button onClick={greet}>Click Me</button>
        </Fragment>
    )
}

export default Greeter