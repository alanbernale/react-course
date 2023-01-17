import React from "react"
import ReactDOM from "react-dom/client"
import {Counter} from "./Counter"
import {Message} from "./Message.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Counter/>
        <br/>
        <Message/>
    </>
)