import { useNotas } from '../../layout/hook/useNotas';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button, ButtonGroup } from '@nextui-org/button';

export const AppRecordatorio = () => {

  const {tasks,handleDelete,handleComplete} = useNotas();

  const tasksWithRecordatorio = tasks.filter((item) => !isObjectEmpty(item.recordatorio));

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

return (<>
  <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
    {tasksWithRecordatorio?.map((item)=>(
      <Card
      radius="lg"
      className={`border-none p-10 min-w-[300px] ${item.completed ? 'opacity-60' : ''}`}
      key={item.id}
      >
          <CardHeader className="flex justify-between absolute -top-2 inset-x-0 ">
              <ButtonGroup className="flex justify-center items-center w-full">
              <Button onClick={()=>handleComplete(item.id)}  
              className={item.completed ?  'bg-green-500 text-white font-bold' : 'bg-[#FDB316] text-white font-bold' }>
              {item.completed ? 'Completado' : 'Pendiente'}
              </Button>

              {/* Este va a ser para llamar el modal si queres algo como recordatorio */}
              <Button isDisabled color='primary' className='text-[#FDB316]' > 
              {item.recordatorio?.availableTimeslot?.startTime instanceof Date
                ? item.recordatorio.availableTimeslot.startTime.toISOString().slice(0, 10)
                : 'Sin fecha'}              
              </Button>

              <Button onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white font-bold  ">
              Eliminar
              </Button>
              </ButtonGroup>
          </CardHeader>
          <CardBody>
              {item.name}
          </CardBody>
          
      </Card>
    ))}
      </div>
     </>
  )
}
