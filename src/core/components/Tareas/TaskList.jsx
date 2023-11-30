/* eslint-disable react/prop-types */
import { useNotas } from '../../layout/hook/useNotas';
import TaskItem from './TaskItem';

const TaskList = ({ onComplete, onDelete, onRecordatorio}) => {
    const {tasks} = useNotas();
    
    return (
<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] '>
            {tasks.map((task) => (
                <div
                    key = {task.id}
                    className='p-2 '
                >
                <TaskItem 
                task = {task}
                onComplete = {onComplete}
                onDelete = {onDelete}
                onRecordatorio = {onRecordatorio}
                />
                </div>
            ))}
        </div>
    )
}

export default TaskList;