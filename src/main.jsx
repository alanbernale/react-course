import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Greeting/>
        <UserCard/>
        <Product/>
        <Navbar/>
    </>
)