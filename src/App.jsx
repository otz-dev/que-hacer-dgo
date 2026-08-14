import {MonthAgenda} from './Agenda/MonthAgenda';
import { Route, Routes, BrowserRouter } from "react-router";
import { ListaDeEventos } from './ListaDeEventos';

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route index element={<MonthAgenda />} />
    <Route path="*" element={<ListaDeEventos />} />
    </Routes>
</BrowserRouter>
  )
} 

export default App
