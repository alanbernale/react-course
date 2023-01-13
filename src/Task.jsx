import './task.css'

export function TaskCard({ready}) {
    return <div className="card">
        <h1>Mi primera tarea</h1>
        <p className={ready ? 'bg-green' : 'bg-red'}>
            {ready ? 'Tarea realizada' : 'Tarea pendiente'}
        </p>
    </div>
}