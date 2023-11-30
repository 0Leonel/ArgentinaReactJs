
import { useAuth } from '../../auth/hook/use_auth';

export const HomeView = () => {
  const {usuario} = useAuth();

  console.log(usuario);
  return (
    <div className='pt-10 flex text-center justify-center items-center flex-wrap text-[#CFCFCF]'>
    <h1 className='basis-full text-2xl lg:text-5xl py-2 font-bold text-[#543232]'>BIENVENIDO <span className='text-[#CFCFCF] text-md lg:text-lg font-normal'>{usuario?.email}</span></h1>
    <div className='max-w-md text-justify'>
      <p className='py-2 text-lg'>
        Para nuestro Trabajo Integrador Final, hemos desarrollado una aplicación web en React JS para gestionar listas de tareas. La aplicación utiliza componentes funcionales, el hook useState para el manejo del estado, el hook useEffect para realizar efectos secundarios, y eventos para interactuar con el usuario.
      </p>
      <h2 className='text-xl lg:text-2xl py-2 font-bold'>
        Los componentes principales son:
      </h2>
      <ul className='list-disc'> 
        <li >
          <strong>TaskList (Lista de Tareas):</strong> Muestra la lista de tareas y gestiona eventos relacionados con ellas, como marcar como completada o eliminar. Cada tarea se representa mediante el componente TaskItem.
        </li>
        <li>
          <strong>TaskItem (Tarea):</strong> Representa individualmente una tarea, mostrando su nombre y un botón para completarla. Utiliza el estado local para gestionar la apariencia de la tarea, como el tachado cuando está completada.
        </li>
        <li>
          <strong>TaskForm (Formulario):</strong> Contiene un formulario para agregar nuevas tareas. Utiliza el estado local para gestionar la entrada del usuario y enviar la nueva tarea a la lista principal.
        </li>
      </ul>
      <p>
        El estado de la aplicación se maneja mediante el hook useState en el componente principal, donde cada tarea es un objeto con propiedades como id, nombre y completada. Además, se utiliza useEffect para realizar acciones, como mostrar un mensaje, cuando el estado de la lista de tareas cambia.
      </p>
      <p>
        Con esta estructura, hemos creado una aplicación eficiente y fácil de usar para la gestión de tareas en React JS.
      </p>
    </div>
  </div>
    );
}
