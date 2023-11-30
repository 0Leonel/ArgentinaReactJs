import {Card, CardFooter, Image, Button, CardBody, CardHeader, Checkbox, ButtonGroup} from "@nextui-org/react";

import {useState} from 'react'
import AppModal from "../Recordatorio/app_Modal";

const TaskItem = ({ task, onComplete, onDelete,onRecordatorio }) => {
    const [completed, setCompleted] = useState(task.completed);
    const [recordatorio, setRecordatorio] = useState(task.recordatorio);

    const handleComplete = () => {
        setCompleted(!completed);
        onComplete(task.id);
    }
    const handleDelete = () => {
        onDelete(task.id);
    }
    const handleRecordatorio = () => {
        setRecordatorio(!recordatorio);
        onRecordatorio(task.id); // Llama a onUpdateDate con el id de la tarea
    };
    return (<>
            <Card
            radius="lg"
            className={`border-none p-10 min-w-[300px] ${completed ? 'opacity-60' : ''}`}
            >
                <CardHeader className="flex justify-between absolute -top-2 inset-x-0 ">
                    <ButtonGroup className="flex justify-center items-center w-full">
                    <Button defaultSelected onClick={handleComplete} className={completed ?  'bg-green-500 text-white font-bold' : 'bg-[#FDB316] text-white font-bold' }>
                    {completed ? 'Completado' : 'Pendiente'}
                    </Button>
                    {/* Este va a ser para llamar el modal si queres algo como recordatorio */}
                    <AppModal onRecordatorio={handleRecordatorio} /> 
                    <Button onClick={handleDelete}
                    className="bg-red-500 text-white font-bold  ">
                    Eliminar
                    </Button>
                    </ButtonGroup>
                </CardHeader>
                <CardBody>
                    {task.name}
                </CardBody>
            
            </Card>
            </>
        )

}

export default TaskItem;