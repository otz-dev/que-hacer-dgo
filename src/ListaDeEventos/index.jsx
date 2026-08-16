import {Page} from '../Page'
import {useLocation, useNavigate} from 'react-router';
import {Filtros} from '../Filtros';
import {Lista} from './Lista';

import Button from '@mui/material/Button';

import './index.css'

export const ListaDeEventos = () =>{
    const {pathname} = useLocation();
    const navigate = useNavigate()

    const l = [{
            id: '2026_08_15_1',
            start: '2026-08-15T17:00:00',
            end: '2026-08-15T19:00:00',
            title: 'Clases de Patinaje: Escuela roller 360.  Clases de Patinaje: Escuela rollerhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 360',
            type: 'deportes',
            allDay: true,
            placeName: 'Skatepark 360',
            address: 'Mina Bacís, Impregnadora Guadiana, 34217 Durango, Dgo.',
            phone: 'N/A',
            price: 'N/A'
        }, {
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
        },{
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
        },{
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
        }, {
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
        }, {
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
        },{
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
        },];

    return (
        <Page pageTitle={`Agenda del día ${new Date(pathname.split('/')[1]).toLocaleDateString()}`}>
            <Filtros />
            <div className='back-to-home'>
                  <Button variant="contained" onClick={()=>{
                    console.log('Clicked')
                    navigate('/')
                    }}>Regresar a Calendario</Button>
            </div>
        
            <Lista eventos={l}/>
        </Page>
    )
}