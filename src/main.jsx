import React from "react"
import ReactDOM from "react-dom/client"

function Greeting() {
    const user = {
        fistName: 'Alan',
        lastName: 'Bernal'
    }

    return <>
        <h1>{user.fistName}</h1>
        <h3>{user.lastName}</h3>
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Greeting/>
        <Greeting/>
        <Greeting/>
    </>
)