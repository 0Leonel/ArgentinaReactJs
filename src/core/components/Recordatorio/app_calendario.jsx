import { ScheduleMeeting } from 'react-schedule-meeting';
import { useNotas } from '../../layout/hook/useNotas';

export default function AppCalendario() {
    const {setFecha} = useNotas();

    const handleSelectTime = (time) => {
        setFecha(time);
        };
        
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

  return (
    <ScheduleMeeting
      borderRadius={10}
      primaryColor="#3f5b85"
      eventDurationInMinutes={30}
      availableTimeslots={availableTimeslots}
      onStartTimeSelect={handleSelectTime}
      onEndTimeSelect={handleSelectTime}
    />
  );
}