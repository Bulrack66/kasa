import React from 'react';
import './Footer.scss';
import logoFooter from '../../assets/logo-footer.png';

export default function Footer() {
  return (
    <footer>
      <div className='Footer'>
          <img src={logoFooter}></img>
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
