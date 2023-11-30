import { useEffect, useState } from 'react'
import { NotasContext } from '../context/notas_context'

export const NotasProvider = ({children}) => {
    const [fecha, setFecha] = useState([]);
    
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(storedTasks);

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

    const handleComplete = (taskId) => {
      setTasks((prevTasks) => 
        prevTasks.map((task)=>
          task.id === taskId ? {...task, completed: !task.completed} : task
        )
      );
    }
  

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
      
  return (
    <NotasContext.Provider value={{tasks, setTasks, fecha, setFecha, handleDelete,handleComplete}}>
      {children}
    </NotasContext.Provider>   
  )
}
