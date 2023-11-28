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
            <button onClick={handleComplete}>
                {completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
        )

}

export default TaskItem;