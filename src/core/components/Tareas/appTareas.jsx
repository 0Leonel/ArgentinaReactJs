import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export const AppTareas = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(()=>{
    console.log('Lista de tareas actualizada:', tasks);

    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  const handleComplete = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map((task)=>
        task.id === taskId ? {...task, completed: !task.completed} : task
      )
    );
  }

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => 
    prevTasks.filter((task)=> task.id !== taskId));
  }

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <div className='flex flex-col text-[#CFCFCF] items-center h-screen'>
    <h1>Tareas</h1>
    <div>
      <h2>Mis Tareas</h2>
      <TaskForm onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete}/>
    </div>
  
  </div>
  )
}

