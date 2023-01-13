export function Greeting({title, name = "User"}) {
    return <h1>{title}, dice {name}</h1>
}

export function UserCard({name, amount, married, points, address, greet}) {
    return <div>
        <h1>{name}</h1>
        <p>💵{amount}</p>
        <p>{married ? 'married' : 'single'}</p>
        <p>Points:</p>
        <ul>
            {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <p>Address:</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Street: {address.street}</li>
        </ul>
    </div>
}

