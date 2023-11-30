// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export const AppTareas = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);


  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

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

