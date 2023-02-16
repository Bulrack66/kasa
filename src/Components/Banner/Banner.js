import { Link, useLocation } from 'react-router-dom';
import './Banner.scss';
import img from '../../assets/logo-kasa-full.png';

function Header() {
  const location = useLocation();
  return (
    <div className="Banner">
      <img src={img} className='sizing-img'></img>
      <nav className='Navbar'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
