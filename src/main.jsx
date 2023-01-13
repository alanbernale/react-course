import React from "react"
import ReactDOM from "react-dom/client"
import {Greeting, UserCard} from "./Greeting"
import Product, {Navbar} from "./Product"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <UserCard
            name="Ryan Ray"
            amount={3000}
            married={true}
            points={[99, 33.3, 22.2]}
            address={{street: '123 Main Street', city: 'New York'}}
            greet={function () {
                alert('Hello')
            }}
        />

        <UserCard
            name="Joe McMillan"
            amount={7400}
            married={false}
            points={[123, 22, 190]}
            address={{street: '155 Lincoln Boulevard', city: 'Ohio'}}
            greet={function () {
                console.log('Ok')
            }}
        />
    </>
)