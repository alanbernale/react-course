import React from "react"
import ReactDOM from "react-dom/client"

function Greeting() {
    return <div>
        <h1>Este es un componente.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <Greeting/>
        <Greeting/>
        <Greeting/>
        <Greeting/>
    </div>
)