/* eslint-disable react/prop-types */
import {useState} from 'react';

const TaskForm = ({onAddTask}) => {
    
    const [taskName, setTaskName] = useState('');
    
    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(taskName.trim() !== ''){
            onAddTask({id:new Date().getTime(), name: taskName, completed: false });
            setTaskName('');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Nueva tarea'
                value={taskName}
                onChange={handleInputChange}
                />
                <button type='submit'
                className="bg-yellow-400 text-white font-bold py-1 px-1 rounded"
                >Agregar</button>
            </form>
        </div>        
    )

}

export default TaskForm;