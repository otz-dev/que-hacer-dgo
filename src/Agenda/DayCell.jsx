import { useState } from "react";

export const DayCell = (weekDay, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)=>{
    
    const dayEventsList = [
       [ {
            id: '2026_08_01_1',
            start: '2026-06-25T00:00:00',
            end: '2026-06-30T03:00:00',
            title: 'Out of Office sdfghjk',
            type: 'deportes',
            allDay: true,
            placeName: 'Teatro Victoria',
            address: 'Bruno Martínez 322, Zona Centro, 34000 Durango, Dgo.',
            phone: '618 812 1095',
            price: '100MX'
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
        [
             
        ],[], [], [], [{
            id: '2026_08_15_1',
            start: '2026-08-15T17:00:00',
            end: '2026-08-15T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },], 
        [{
            id: '2026_08_15_1',
            start: '2026-08-16T17:00:00',
            end: '2026-08-16T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },], [], [], [], [],
        [], [{
            id: '2026_08_15_1',
            start: '2026-08-15T17:00:00',
            end: '2026-08-15T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },], 
        [{
            id: '2026_08_15_1',
            start: '2026-08-16T17:00:00',
            end: '2026-08-16T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },], [], [],
        [], [], [], [{
            id: '2026_08_15_1',
            start: '2026-08-15T17:00:00',
            end: '2026-08-15T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },], 
        [{
            id: '2026_08_15_1',
            start: '2026-08-16T17:00:00',
            end: '2026-08-16T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        },],
        [], [], [], [], [],
        [], [], [], [], [],
        [], []
    ];

    const realMonthDay = (weekDay+(7*weekNumber));
    const eventsArray = dayEventsList[(weekDay+(7*weekNumber))-firstWeekDayOfTheMonth];

    const displayEventsItems =  realMonthDay >= firstWeekDayOfTheMonth && realMonthDay <(daysInMonth+firstWeekDayOfTheMonth);

    return (
        <div className="day-cell">
            {
                displayEventsItems && <div className="dayMonth">
                    <strong onClick={(e)=>{
                        setIsEventModalOpen(true);
                        setDisplayEventData({
                            id: `${eventsArray.length? 'all-events': 'no-events'}`,
                            start:  eventsArray[0]?.start
                        });
                        }}> { ((weekDay+(7*weekNumber))-firstWeekDayOfTheMonth)+1 } 
                    </strong>
                </div>
            }
            {displayEventsItems && <ul>
                {
                    eventsArray.map((event, index)=> {
                        return( 
                            <li role='button' key={event.id} id={event.id} onClick={(e, i)=>{
                                setIsEventModalOpen(true);
                                setDisplayEventData({
                                    id: `${event.id.at(-1)>1? 'all-events' : event.id}`,
                                    start: event.start,
                                    end: event.end,
                                    title: event.title,
                                    type: event.type,
                                    allDay: event.allDay,
                                    placeName: event.placeName,
                                    address: event.address,
                                    phone: event.phone,
                                    price: event.price
                                })
                                
                            }}>
                                {
                                    index < 1 && 
                                    <>
                                    <div className="event-type" id={`event-type-item-${event.id}`}/>
                                    <span className="event-title" id={`event-title-${event.id}`}>{event.title}</span>
                                    <span id={`event-time-${event.id}`}>{event.time}</span>
                                    </>  
                                    || 
                                    index === 1 && <span className="event-title" id={`more-events-`}>Más Eventos</span>
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