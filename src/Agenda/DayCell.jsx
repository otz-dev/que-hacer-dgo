import { useState } from "react";

export const DayCell = (weekDay, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)=>{
    
    const dayEventsList = [
       [ {
            id: '2026_08_01_1',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office sdfghjk',
            type: 'deportes',
            allDay: true,
        },
        {
            id: '2026_08_01_2',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office',
            type: 'teatro',
            allDay: true,
        },
        {
            id: '2026_08_01_3',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office',
            type: 'cultural',
            allDay: true,
        }], [], [], [], [{
            id: '2026_08_05_1',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Decadas 80s 90s 2000s',
            type: 'teatro',
            allDay: true,
        }], 
        [], [], [], [], [{
            id: '2026_08_10_1',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Decadas 80s 90s 2000s',
            type: 'teatro',
            allDay: true,
        }], 
        [],[], [], [], [], 
        [], [], [], [], [],
        [], [], [], [], [],
        [], [], [], [], [],
        [], [], [], [], [],
        [], [], [], [], [],
        [], []
    ];

    const realMonthDay = (weekDay+(7*weekNumber));
    const eventsArray = dayEventsList[(weekDay+(7*weekNumber))-firstWeekDayOfTheMonth];

    const displayEventsItems =  realMonthDay >= firstWeekDayOfTheMonth && realMonthDay <(daysInMonth+firstWeekDayOfTheMonth);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [eventIdItem, setEventIdItem] = useState();

    console.log(realMonthDay, eventsArray)
    return (
        <div className="day-cell">
            {
                displayEventsItems && <div className="dayMonth">
                    <strong onClick={(e)=>{
                        console.log('Clicked', e.target.id);
                        setEventIdItem(e.target.id)
                        setIsEventModalOpen(true);
                        }}> { ((weekDay+(7*weekNumber))-firstWeekDayOfTheMonth)+1 } 
                    </strong>
                </div>
            }
            {displayEventsItems && <ul>
                {
                    eventsArray.map((event, index)=> {
                        return( 
                            <li role='button' key={event.id} id={event.id} onClick={(e, i)=>{
                                console.log('Clicked', e.target.id);
                                setEventIdItem(e.target.id.split('-').at(-1))
                                setIsEventModalOpen(true);
                                
                            }}>
                                {
                                    index < 1 && 
                                    <>
                                    <div className="event-type" id={`event-type-item-${event.id}`}/>
                                    <span className="event-title" id={`event-title-${event.id}`}>{event.title}</span>
                                    <span id={`event-time-${event.id}`}>{event.time}</span>
                                    </>  
                                    || 
                                    index === 1 && <span id={`more-events-`}>... Más Eventos</span>
                                }
                            </li>
                            )
                    } 
                    )
                }
            </ul>}
        </div>
    );

}