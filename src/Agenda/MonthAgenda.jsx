import { useState } from 'react';
import {DayCell} from './DayCell';
import { EventModal } from "../Modal/EventModal";

import './index.css';

export const MonthAgenda = ()=> {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const currentDate = new Date();
    const [month, setMonth] = useState(months[currentDate.getMonth()]);
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(currentDate.getMonth());
    const [firstWeekDayOfTheMonth, setFirstWeekDayOfTheMonth] = useState(new Date( currentDate.getFullYear(), currentDate.getMonth()+1, 1));
    const [daysInMonth, setDaysInMonth] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate())
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [{id, start, end, title, type, price, placeName, address, phone}, setDisplayEventData] = useState({});

    console.log('????', id, start, end, title, type)
    const generateWeek = (weekNumber, dayLimit, firstWeekDayOfTheMonth)=>{
        return (
        <tr className='calendar-week-row'>
            <td className='calendar-day weekend-day'>{DayCell(0, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td> 
            <td className='calendar-day'>{DayCell(1, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td> 
            <td className='calendar-day'>{DayCell(2, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td> 
            <td className='calendar-day'>{DayCell(3, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td> 
            <td className='calendar-day'>{DayCell(4, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td> 
            <td className='calendar-day'>{DayCell(5, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td>
            <td className='calendar-day weekend-day'>{DayCell(6, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth, isEventModalOpen, setIsEventModalOpen, setDisplayEventData)}</td>
        </tr>);
    }
    const generateMonthDaysLayout = (FirstWeekDayOfTheMonth)=>{

       return (<table className='soni'>

            <thead className='calendar-header'>
                <tr className='MuiMonthCalendar-root'>
                <th className='MuiMonthCalendar-root'>Do</th>
                <th>Lu</th>
                <th>Ma</th>
                <th>Mi</th>
                <th>Ju</th>
                <th>Vi</th>
                <th>Sa</th>
                </tr>
            </thead>

            <tbody>
            {generateWeek(0, (FirstWeekDayOfTheMonth*0)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}
            {generateWeek(1, (FirstWeekDayOfTheMonth*1)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}
            {generateWeek(2, (FirstWeekDayOfTheMonth*2)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}
            {generateWeek(3, (FirstWeekDayOfTheMonth*3)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}
            {generateWeek(4, (FirstWeekDayOfTheMonth*4)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}
            {generateWeek(5, (FirstWeekDayOfTheMonth*4)+(FirstWeekDayOfTheMonth), FirstWeekDayOfTheMonth)}

            </tbody>

        </table>)

    }

  return (
    <>
        <h2>{`Eventos en ${month} ${currentDate.getFullYear()}`}</h2>
        <div  >
            {
                generateMonthDaysLayout(firstWeekDayOfTheMonth.getDay())
            }
        </div>
        <div className='sarahi'>
            <button disabled={!(selectedMonthNumber>0)} className='month-button' onClick={()=>{
                setSelectedMonthNumber((prevSelectedMonthNumber)=>prevSelectedMonthNumber-1)
                setMonth(()=>months[selectedMonthNumber-1]);
                setFirstWeekDayOfTheMonth(()=>new Date( currentDate.getFullYear(), selectedMonthNumber-1, 1));
                setDaysInMonth(new Date(currentDate.getFullYear(), selectedMonthNumber-2, 0).getDate()); // this is -2 considering that the state hasn't been updated and the actual month number
            }}> {`<<< ${' '} Mes Anterior`}</button> 
            
            <button disabled={!(selectedMonthNumber<11)} className='month-button' onClick={()=>{
                setSelectedMonthNumber((prevSelectedMonthNumber)=>prevSelectedMonthNumber+1)
                setMonth(()=>months[selectedMonthNumber+1])
                setFirstWeekDayOfTheMonth(()=>new Date( currentDate.getFullYear(), selectedMonthNumber+1, 1));
                setDaysInMonth(new Date(currentDate.getFullYear(), selectedMonthNumber+2, 0).getDate()); // this is -2 considering that the state hasn't been updated and the actual month number
            }}>{`Siguente Mes ${' '} >>>`}</button>
        </div>

        {isEventModalOpen && <EventModal isOpen={isEventModalOpen} onClose={()=>{setIsEventModalOpen(false)}} title={title} children={
            <>
            
            <p>Tipo: {type}</p>
            <p>Fecha: {new Date(start).toLocaleDateString()}</p>
            <p>Hora: {`${new Date(start).toLocaleTimeString()} - ${new Date(end).toLocaleTimeString()}`}</p>
            <p>Costo: {price}</p>
            <p>Lugar: {placeName}</p>
            <p>Dirección: {address}</p>
            <p>ID: {id}</p>
            </>
        }/>}
    </>
  );
}