import React from 'react'
import './Profiles.scss'

export default function Profils({avatar, name}) {

  return (
    <div className='Profils'>
      <p className='name'>{name}</p>
      <img className='avatarPicture' src={avatar} alt="Photo de profile"></img>
    </div>
  )
}
