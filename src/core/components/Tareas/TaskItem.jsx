import {Card, CardFooter, Image, Button, CardBody, CardHeader, Checkbox, ButtonGroup} from "@nextui-org/react";

import {useState} from 'react'
import AppModal from "../Recordatorio/app_Modal";
import deleteIcon from "../../../assets/delete.svg";
import { useNotas } from "../../layout/hook/useNotas";

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
            className={`border-none p-10 min-w-[300px] ${completed ? 'opacity-50' : ''}`}
            >
                <CardHeader className="flex justify-between absolute -top-2 inset-x-0 ">
                    <ButtonGroup className="flex justify-center items-center w-full">
                    <Button defaultSelected onClick={handleComplete} 
                    className={completed ?  'bg-[#3A7C4D] text-[#212121] font-bold h-8 hover:bg-[#295837]' : 'bg-[#FDB316] text-[#212121] font-bold h-8 hover:bg-[#C38B12]' }>
                    {completed ? 'Completado' : 'Pendiente'}
                    </Button>
                    {/* Este va a ser para llamar el modal si queres algo como recordatorio */}
                    <AppModal onRecordatorio={handleRecordatorio} onComplete={completed}/> 
                    <Button onClick={handleDelete }
                    className="h-8 bg-[#D0D0D0] hover:bg-[#7A7A7A]">
                    <img src={deleteIcon} className="w-6 " alt="delete" />
                    </Button>
                    </ButtonGroup>
                </CardHeader>
                <CardBody>
                    {task.name}
                </CardBody>
                <CardFooter>
                {!completed  ? (
                        <p className="text-[#212121] font-semibold absolute bottom-1  inset-x-0 text-center text-md">{task.msg}</p>
                    ) : null } 
                </CardFooter>
            
            </Card>
            </>
        )

}

export default TaskItem;