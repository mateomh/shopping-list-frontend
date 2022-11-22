import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faBasketShopping,
  faCartShopping,
  faCashRegister
} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './NavBar/styles.css';
import { Link } from 'react-router-dom';
import { BaseSyntheticEvent } from 'react';

const NavBar:React.FC = () => {
  const clickItem = (event:BaseSyntheticEvent) => {
    const selectedLink = document.getElementsByClassName("link-selected")[0];
    selectedLink.classList.toggle("link-selected");
    event.target.classList.toggle("link-selected");
  }

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
        onClick={clickItem}
      >
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link 
        to="/products"
        className='link'
        onClick={clickItem}
      >
        <FontAwesomeIcon icon={faBasketShopping} />
        Products
      </Link>
      <Link 
        to="/stores"
        className='link'
        onClick={clickItem}
      >
        <FontAwesomeIcon icon={faCashRegister} />
        Stores
      </Link>
      <Link 
        to="/products"
        className='link'
        onClick={clickItem}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Shopping List 
      </Link>
    </div>
  );
}

export default NavBar;