import { useNotas } from '../../layout/hook/useNotas';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Button, ButtonGroup } from '@nextui-org/button';
import deleteIcon from '../../../assets/delete.svg'
export const AppRecordatorio = () => {

  const {tasks,handleDelete,handleComplete} = useNotas();

  const tasksWithRecordatorio = tasks.filter((item) => !isObjectEmpty(item.recordatorio));

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  return (<>
    {tasksWithRecordatorio?.length === 0 && <h1 className=' flex justify-center tracking-widest font-extrabold shadow-[#763737] items-center w-full text-center text-[#763737] text-5xl'>No hay recordatorios</h1>}
  <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] w-full gap-4 p-4'>
    {tasksWithRecordatorio?.map((item)=>(
      <Card
      radius="lg"
      className={`border-none p-10 min-w-[300px] ${item.completed ? 'opacity-60' : ''}`}
      key={item.id}
      >
          <CardHeader className="flex justify-between absolute -top-2 inset-x-0 ">
              <ButtonGroup className="flex justify-center items-center w-full">
              <Button defaultSelected onClick={()=>handleComplete(item.id)} 
                    className={item.completed ?  'bg-[#3A7C4D] text-[#212121] font-bold h-8' : 'bg-[#FDB316] text-[#212121] font-bold h-8 hover:bg-[#C38B12]' }>
                    {item.completed ? 'Completado' : 'Pendiente'}
                    </Button>

              {/* Este va a ser para llamar el modal si queres algo como recordatorio */}
              <Button 
              className="bg-[#D0D0D0] text-[#212121] hover:bg-[#7A7A7A] h-8" > 
              {item.recordatorio?.startTime instanceof Date
                ? (item.recordatorio.startTime.toString().slice(4, 21) )
                : item.recordatorio?.startTime.toString().slice(0, 10) || 'Sin recordatorio'}                                           
              </Button>

              <Button onClick={()=>handleDelete(item.id)}
                    className="h-8 bg-[#D0D0D0] hover:bg-[#7A7A7A]">
                    <img src={deleteIcon} className="w-6" alt="delete" />
                    </Button>
              </ButtonGroup>
          </CardHeader>
          <CardBody>
              {item.name}
          </CardBody>
          <CardFooter>
                {!item.completed  ? (
                        <p className="text-[#212121] font-semibold absolute bottom-1  inset-x-0 text-center text-md">{item.msg}</p>
                    ) : null } 
                </CardFooter>
          
      </Card>
    ))}
      </div>
     </>
  )
}
