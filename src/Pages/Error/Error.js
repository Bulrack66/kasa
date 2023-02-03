import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss'

export default function Error() {
  return (
    <div className='Error'>
        <h1 className='error-404'>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='link' to='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}
