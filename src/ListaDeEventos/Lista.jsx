import './index.css';

export const Lista = (props)=>{
    return <div className='lista-eventos'>
            <ul>
            {props.eventos?.map((evento)=>{
                return (<li key={evento.id}>
                    <div className="event-type" id={`event-type-item-${evento.id}`}/>
                    <span><strong>{new Date(evento.start).toLocaleTimeString()}</strong></span>
                    <span className='event-title-list-item'>{evento.title}</span>
                    </li>)
            })}
            </ul>
    </div>
}