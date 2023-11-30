import { useContext } from 'react'
import { NotasContext } from '../context/notas_context';

export const useNotas = () => {
    const {tasks, setTasks, fecha, setFecha, handleDelete,handleComplete,handleRecordatorio} = useContext(NotasContext);

  return {
      tasks,
      setTasks,    
      fecha,
      setFecha,
      handleDelete,
      handleComplete,
      handleRecordatorio,
     
  }
}
