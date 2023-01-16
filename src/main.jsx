import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"
import {Button} from "./Button"
import {TaskCard} from "./Task"
import {Saludar} from "./Saludar"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Button text="Hi"/>

        <form onSubmit={e => {
            e.preventDefault()
            console.log('Submitted form!')
        }}>
            <h1>Formulario de registro</h1>
            <button type="submit">Enviar</button>
        </form>
    </>
)