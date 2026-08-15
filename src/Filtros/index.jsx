import { Checkbox, FormGroup, FormControlLabel, FormLabel } from '@mui/material';

import './index.css';

export const Filtros = ()=>{

    return (
        <div className='filter-container'>
        
            <FormGroup className='event-type-filter'>
                <FormLabel>Typo de eventos: </FormLabel>
                <FormControlLabel control={<Checkbox />} label="Deportes" />
                <FormControlLabel control={<Checkbox />} label="Teatro" />
                <FormControlLabel control={<Checkbox />} label="Conciertos" />
                <FormControlLabel control={<Checkbox />} label="Culturales" />
                <FormControlLabel control={<Checkbox />} label="Ventas" />
                <FormControlLabel control={<Checkbox />} label="Cursos" />
            </FormGroup>
        </div>
    )
}