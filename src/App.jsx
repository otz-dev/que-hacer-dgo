import {MonthAgenda} from './Agenda/MonthAgenda';

function App() {
  return (
    <>
      <header><h1>Qué hacer en Durango</h1></header>
      
      <main className='calendar-container'>
          <MonthAgenda />
      </main>
    
      <footer>
          <div> <strong>Te gustaría que tu evento apareciera en nuestro calendario</strong></div>
          <div>  envia un correo: abc.abc@quehacerendurango.com</div>
      </footer>
    </>
  )
} 

export default App
