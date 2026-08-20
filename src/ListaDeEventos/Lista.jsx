import { useState } from 'react';
import './index.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Lista = (props)=>{
    const [selectedEventDetails, setSelectedEventDetails] = useState('');

    return <div className='lista-eventos'>
            <ul>
            {props.eventos?.map((evento)=>{
                return (
                    <>
                    <li key={evento.id} onClick={(e)=>{
                        setSelectedEventDetails((prev)=>prev!==evento.id ? evento.id : '')
                    }}>
                    
                        <div className={`view-event-detail-collapsed ${ selectedEventDetails === evento.id? 'view-event-detail-expanded' : ''} `}>
                        <ArrowForwardIosIcon />

                        </div>
                        <div className="event-type" id={`event-type-item-${evento.id}`}/>
                        <span className='event-time'><strong>{new Date(evento.start).toLocaleTimeString()}</strong></span>
                        <span className='event-title-list-item'>{evento.title}</span>
                        
                    
                    </li>
                        <div className='event-detail-card' hidden={selectedEventDetails !== evento.id}>
                            <h3>{evento.title}</h3>

                            <div className='event-info-container'>
                                <div><span className='description'><strong>Lugar: </strong></span>{evento.placeName}</div>
                                <div><span className='description'><strong>Dirección: </strong></span>{evento.address}</div>
                                <div><span className='description'><strong>Teléfono: </strong></span>{evento.price}</div>
                                <div><span className='description'><strong>Costo: </strong></span>{evento.price}</div>
                                <div >
                                    <img src={evento.poster} alt="poster-del-evento" className='poster'/>
                                </div>

                            </div>
                        </div>
                    </>
                )
            })}
            </ul>
    </div>
}