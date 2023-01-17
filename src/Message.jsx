import {useState} from "react"

export function Message() {
    const [message, setMessage] = useState('')

    return <div>
        <input type="text" onChange={e => setMessage(e.target.value)}/>
        <button onClick={() => console.log('El mensaje es: ' + message)}>Guardar</button>
    </div>
}