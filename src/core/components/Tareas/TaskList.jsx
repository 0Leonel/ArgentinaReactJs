/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';

const TaskList = ({tasks, onComplete, onDelete}) => {
    return (
        <div>
            {tasks.map((task) => (
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