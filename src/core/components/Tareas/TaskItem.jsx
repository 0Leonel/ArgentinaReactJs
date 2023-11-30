/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {useState} from 'react'

const TaskItem = ({ task, onComplete, onDelete}) => {
    
    const [completed, setCompleted] = useState(task.completed);

    const handleComplete = () => {
        setCompleted(!completed);
        onComplete(task.id);
    }

    const handleDelete = () => {
        onDelete(task.id);
    }

    return (
        <div>
            <span>{task.name} </span>
            <button onClick={handleComplete}
            className="bg-green-500 text-white font-bold py-1 px-1 rounded"
            >
                {completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-1 px-1 rounded"
            >Eliminar</button>
        </div>
        )

}

export default TaskItem;