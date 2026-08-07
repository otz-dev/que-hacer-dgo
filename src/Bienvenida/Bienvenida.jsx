import { useState } from 'react';
import { EventCalendar } from '@mui/x-scheduler/event-calendar';

export const Bienvenida = () =>{
    const currentMont = new Intl.DateTimeFormat('es', {month: 'long'});

    const startDay = new Date()
    const defaultEndDay = new Date();
    const endDay = new Date(defaultEndDay.setDate(defaultEndDay.getDate()+1))
    const defaultMonth = currentMont.format(new Date());
    const initialEvents = [
  {
    id: '1',
    start: startDay.toISOString(),
    end: endDay.toISOString(),
    title: 'Event 1',
    allDay: true,
    resource: 'A',
  },

  {
    id: '2',
    start: startDay.toISOString(),
    end: endDay.toISOString(),
    title: 'Event 2',
    // allDay: true,
    resource: 'C',
  },
  
];

const resources = [
  { title: 'Resource A', id: 'A', eventColor: 'purple' },
  { title: 'Resource B', id: 'B', eventColor: 'teal' },
  { title: 'Resource C', id: 'C', eventColor: 'lime' },
  { title: 'Resource D', id: 'D', eventColor: 'orange' },
  { title: 'Resource E', id: 'E', eventColor: 'indigo' },
];

  const [events, setEvents] = useState(initialEvents);
  const [viewMonth, setViewMonth] = useState(defaultMonth[0].toUpperCase()+defaultMonth.substring(1));

  const handleMonthView = (event)=>{
    setViewMonth(event.target.getAttribute('aria-label').split(' ')[1])
  }

    return (<><h1> Qué hacer en Durango </h1>
    
    
        <main>
            <h2>{`Eventos de ${viewMonth}`}</h2>

        {events && <EventCalendar
        events={events}
        resources={resources}
        onClick={handleMonthView}
        
      />}
        </main>
    </>)
}