import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default function Card(props) {

  const cardClass = `card ${props.cor}`;

  return (

    <Link to={props.link} className='link'>
        <div className={cardClass}>
            <div className='retangulo'/>
            <h3 className='titulo'>{props.titulo}</h3>
            <h4 className='subtitulo'>{props.subtitulo}</h4>
        </div>
    </Link>
  )
}
