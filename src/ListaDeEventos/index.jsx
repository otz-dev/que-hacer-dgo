import {Page} from '../Page'
import {useLocation} from 'react-router';

import './index.css'

export const ListaDeEventos = () =>{
    const {pathname} = useLocation();

    return (
        <Page>
            <h2>{`Agenda del día ${pathname.split('/')[1]}`}</h2>
        </Page>
    )
}