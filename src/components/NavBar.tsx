import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faBasketShopping,
  faCartShopping,
  faCashRegister
} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './NavBar/styles.css';

const NavBar:React.FC = () => {
  return(
    <div className="navbar">
      <a
        href="/"
        className='logo'
      >
      </a>
      <a 
        href="/"
        className='link-selected link'
      >
        <FontAwesomeIcon icon={faHouse} />
        Home
      </a>
      <a 
        href="/products"
        className='link'
      >
        <FontAwesomeIcon icon={faBasketShopping} />
        Products
      </a>
      <a 
        href="/stores"
        className='link'
      >
        <FontAwesomeIcon icon={faCashRegister} />
        Stores
      </a>
      <a 
        href="/products"
        className='link'
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Shopping List 
      </a>
    </div>
  );
}

export default NavBar;