import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faBasketShopping,
  faCartShopping,
  faCashRegister
} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './NavBar/styles.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavbarHighlight } from '../utils/hooks/useNavBarHighlight';

const NavBar:React.FC = () => {
  const location = useLocation();
  const navbarChange = useNavbarHighlight();

  useEffect(() => {
    navbarChange(location.pathname);
  },[location, navbarChange]);


  return(
    <div className="navbar">
      <Link
        to="/"
        className='logo'
      >
      </Link>
      <Link
        to="/"
        className='link-selected link'
        id='/'
      >
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link 
        to="/products"
        className='link'
        id='/products'
      >
        <FontAwesomeIcon icon={faBasketShopping} />
        Products
      </Link>
      <Link 
        to="/stores"
        className='link'
        id='/stores'
      >
        <FontAwesomeIcon icon={faCashRegister} />
        Stores
      </Link>
      <Link 
        to="/list"
        className='link'
        id='/list'
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Shopping List 
      </Link>
    </div>
  );
}

export default NavBar;