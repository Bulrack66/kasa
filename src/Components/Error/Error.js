import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404.png'

export default function Error() {
  return (
    <div>
        <img src={img}></img>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}
