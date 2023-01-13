import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"
import {Button} from "./Button"
import {TaskCard} from "./Task"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <TaskCard ready={true}/>
        <TaskCard ready={false}/>
    </>
)