import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useNotas } from '../../layout/hook/useNotas';

export const AppTareas = () => {
  const {tasks, setTasks, fecha,msg, setMsg} = useNotas();  

  const handleComplete = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map((task)=>
        task.id === taskId ? {...task, completed: !task.completed} : task
      )
    );
  }

  const handleDelete = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);

    if (!taskToDelete.completed) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, msg: 'Completa la tarea antes de borrarla' } : task
        )
      );
      return;
    } 

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  
  const handleRecordatorio = (taskId) => {
    
    setTasks((prevTasks) => 
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, recordatorio: fecha} : task
      )
    );
  };
  
  const handleAddTask = (newTask) => {
    
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }


  return (
    <div className='w-full'>
    <h1>Tareas</h1>
    <div>
      <h2>Mis Tareas</h2>
      <div className='w-full flex justify-center  items-center' >
      <TaskForm onAddTask={handleAddTask}/>
      </div>
      <div className=''>
      <TaskList 
      tasks={tasks} 
      onComplete={handleComplete} 
      onRecordatorio={handleRecordatorio}
      onDelete={handleDelete}
      />
      </div>
    </div>
  
  </div>
  )
}

