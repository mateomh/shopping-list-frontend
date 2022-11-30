import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddToCartButton/styles.css";

interface AddToCartButtonProps {
  callBack: () => void;
}

const AddToCartButton:React.FC<AddToCartButtonProps> = ({
  callBack
}) => {
  return(
    <button
      type="button"
      id="add-to-cart"
      className="add-to-cart-button"
      onClick={callBack}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <b>Add To Cart</b>
    </button>
  );
}

export default AddToCartButton;