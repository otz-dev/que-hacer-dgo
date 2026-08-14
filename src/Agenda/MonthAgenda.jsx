import {DayCell} from './DayCell';

import './index.css';

export const MonthAgenda = ()=> {

    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

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

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const date = new Date();
    const month = months[date.getMonth()];

    const FirstWeekDayOfTheMonth = new Date( date.getFullYear(), date.getMonth(), 1);

  return (
    <>
        <h1>Que hacer en Durango</h1>
        <h2>{`Eventos en ${month}`}</h2>
        <div className='calendar-container' >
            {
                generateMonthDaysLayout(FirstWeekDayOfTheMonth.getDay())
            }
        </div>
    </>
  );
}