// import './index.css';

export const DayCell = (weekDay, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)=>{
    
    const dayEventsList = [
        {
            id: 'holidays-1',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office sdfghjk',
            type: 'holidays',
            allDay: true,
        },
        {
            id: 'holidays-2',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office',
            type: 'holidays',
            allDay: true,
        },
        {
            id: 'holidays-3',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T00:00:00',
            title: 'Out of Office',
            type: 'holidays',
            allDay: true,
        },
    ];

    const realMonthDay = (weekDay+(7*weekNumber));

    const displayEventsItems =  realMonthDay >= firstWeekDayOfTheMonth && realMonthDay <(daysInMonth+firstWeekDayOfTheMonth);

    return (
        <div className="day-cell">
            {<div className="dayMonth"><strong>{ displayEventsItems? ((weekDay+(7*weekNumber))-firstWeekDayOfTheMonth)+1 : null }</strong></div>}
            {displayEventsItems && <ul>
                {
                    dayEventsList.map((event, index)=> {
                        return( 
                            <li key={event.id}>
                                {
                                    index < 2 ?
                                    <>
                                    <div className="event-type"/>
                                    <span className="event-title">{event.title}</span>
                                    <span>{event.time}</span>
                                    </> 
                                    : <>... Más Eventos</>
                                }
                            </li>)
                    } 
                    )
                }
            </ul>}
        </div>
    );

}