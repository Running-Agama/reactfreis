import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default function Cabecalho() {
  return (
    <div className='cabecalho'>
        <div className='titulo'>
            <img src='/logo.png' alt='logo'/>
            <h1>
                 {'React FreiS'}
            </h1>
        </div>
            <div className='links'>
                <Link to='/' className='link'>Inicio</Link>
                <Link to='/sobre' className='link'>Sobre</Link>
            </div>
    </div>
  )
}
