/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';

const TaskList = ({task, onComplete, onDelete}) => {
    return (
        <div>
            {task.map((task) => (
                <TaskItem 
                key = {task.id}
                task = {task}
                onComplete = {onComplete}
                onDelete = {onDelete}
                />
            ))}
        </div>
    )
}

export default TaskList;