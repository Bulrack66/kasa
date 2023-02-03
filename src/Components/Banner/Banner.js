import { Link, useLocation } from 'react-router-dom';
import './Banner.scss';
import img from '../../assets/logo-kasa-full.png';

function Header() {
  const location = useLocation();
  return (
    <div className="Banner">
      {/* + location.pathname.replace(/\//g,'') */}
      <img src={img} className='sizing-img'></img>
      <nav className='Navbar'>
        <Link to="/">ACCUEIL</Link>
        <Link to="/about">A PROPOS</Link>
      </nav>
    </div>
  );
}

export default Header;
