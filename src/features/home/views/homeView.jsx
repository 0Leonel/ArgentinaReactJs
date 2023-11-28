/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect } from 'react'
import appFirebase from '../../../credenciales';
import { getAuth, signOut } from "firebase/auth";
import TaskList from '../../../core/components/Tareas/TaskList';
import TaskForm from '../../../core/components/Tareas/TaskForm';
const auth = getAuth(appFirebase);

export const HomeView = (props) => {
  
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

  const handleAddTassk = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }


  return (
    <div>
      <h1>Welcome {props.users}! <button onClick={() => signOut(auth)} className='bg-blue-500 rounded-lg text-white p-1'>Logout</button></h1>
      <div className='flex flex-1 '>
        <h2>Mis Tareas</h2>
        <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete}/>
        <TaskForm onAddTask={handleAddTassk}/>
      </div>
    
    </div>
  )
}
