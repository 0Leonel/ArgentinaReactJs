/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/button';
import {useState} from 'react';

const TaskForm = ({onAddTask}) => {
    
    const [taskName, setTaskName] = useState('');
    
    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(taskName.trim() !== ''){
            onAddTask({id:new Date().getTime(), name: taskName, completed: false ,msg: '', recordatorio: {}});
            setTaskName('');
        }
    }

    return(
        <div className='max-w-2xl w-full'>

            <form onSubmit={handleSubmit} className='flex w-full'>
                <input
                type='text'
                placeholder='Nueva tarea'
                value={taskName}
                onChange={handleInputChange}
                className='w-full py-1 px-2 rounded'
                />
                <Button type='submit'
                className={taskName ? "bg-[#3A7C4D] text-[#212121] font-bold py-1 px-1 rounded ml-2 text-lg": "bg-[#FDB316] text-[#212121] font-bold py-1 px-1 rounded ml-2 text-lg"}>
                Añadir
                </Button>
            </form>
        </div>
    )

}

export default TaskForm;