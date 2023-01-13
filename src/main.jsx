import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"
import {Button} from "./Button"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Button text="Click Me" />
        <Button text="Pay" />
        <Button text="Go To" name="Joe"/>
    </>
)