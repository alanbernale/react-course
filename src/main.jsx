import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"
import {Button} from "./Button"
import {TaskCard} from "./Task"
import {Saludar} from "./Saludar"
import {Posts} from "./Posts"

const users = [
    {
        id: "1",
        name: "Ryan Ray",
        image: "https://robohash.org/user1"
    },
    {
        id: "2",
        name: "Joe Jonas",
        image: "https://robohash.org/user2"
    },
    {
        id: "3",
        name: "Marthy McMillan",
        image: "https://robohash.org/user3"
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {users.map((user) => {
            return <div key={user.id}>
                <h1>{user.name}</h1>
                <img src={user.image} alt={user.name}/>
            </div>
        })}
    </>
)