import { useState } from 'react';
import {DayCell} from './DayCell';

import './index.css';

export const MonthAgenda = ()=> {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const currentDate = new Date();
    // const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // used to populate the calendar

    const generateWeek = (weekNumber, dayLimit, firstWeekDayOfTheMonth)=>{
        return (
        <tr className='calendar-week-row'>
            <td className='calendar-day weekend-day'>{DayCell(0, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td> 
            <td className='calendar-day'>{DayCell(1, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td> 
            <td className='calendar-day'>{DayCell(2, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td> 
            <td className='calendar-day'>{DayCell(3, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td> 
            <td className='calendar-day'>{DayCell(4, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td> 
            <td className='calendar-day'>{DayCell(5, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td>
            <td className='calendar-day weekend-day'>{DayCell(6, weekNumber, dayLimit, firstWeekDayOfTheMonth, daysInMonth)}</td>
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

    const [month, setMonth] = useState(months[currentDate.getMonth()]);
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(currentDate.getMonth());
    const [firstWeekDayOfTheMonth, setFirstWeekDayOfTheMonth] = useState(new Date( currentDate.getFullYear(), currentDate.getMonth()+1, 1));
    const [daysInMonth, setDaysInMonth] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate())


    console.log('Month', selectedMonthNumber, firstWeekDayOfTheMonth, daysInMonth)

  return (
    <>
    <header><h1>Que hacer en Durango</h1></header>
        
        <main className='calendar-container'>
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
                }}>Mes Anterior</button> 
                
                <button disabled={!(selectedMonthNumber<11)} className='month-button' onClick={()=>{
                    setSelectedMonthNumber((prevSelectedMonthNumber)=>prevSelectedMonthNumber+1)
                    setMonth(()=>months[selectedMonthNumber+1])
                    setFirstWeekDayOfTheMonth(()=>new Date( currentDate.getFullYear(), selectedMonthNumber+1, 1));
                    setDaysInMonth(new Date(currentDate.getFullYear(), selectedMonthNumber+2, 0).getDate()); // this is -2 considering that the state hasn't been updated and the actual month number

                }}>Siguente Mes</button>
            </div>
        </main>
    
    <footer>
        <div> <strong>Te gustaría que tu evento apareciera en nuestro calendario</strong></div>
        <div>  envia un correo: abc.abc@quehacerendurango.com</div>
    </footer>
    </>
  );
}