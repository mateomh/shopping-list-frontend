import React, { useContext, useReducer } from "react";
import { CartReducer, ShoppingCartState } from "./reducers/CartReducer";

const defaultCart: ShoppingCartState = {
  products: [],
}

interface CartChangers {
  changeCartState?: any;
}

const defaultCartChanger:CartChangers = {}

const ShoppingCartContext = React.createContext(defaultCart);
const ChangeCartContext = React.createContext(defaultCartChanger);

const CartContext:React.FC<React.PropsWithChildren> = ({children}) => {
  // Change this for reducers
  // const [cartState, setCartState] = useState<CartObject>(defaultCart);
  const [cartState, dispatch] = useReducer(CartReducer, defaultCart);

  return(
    <ShoppingCartContext.Provider value={cartState}>
      {/* pass the dispatch as value for the change cart provider */}
      <ChangeCartContext.Provider value={{changeCartState: dispatch}}>
        {children}
      </ChangeCartContext.Provider>
    </ShoppingCartContext.Provider>
  ); 
}

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if(context === undefined) {
    throw new Error("useStoreContext must be used within the StoreContext component")
  }

  return context;
}

export const useChangeShoppingCart = () => {
  const context = useContext(ChangeCartContext);

  if(context === undefined) {
    throw new Error("useStoreContext must be used within the StoreContext component")
  }

  return context;
}

export default CartContext;