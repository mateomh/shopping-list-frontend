import { Action } from "./Actions";

interface ShoppingCartItem {
  id: number;
  name: string;
  quantity: string;
  description: string;
}

export interface ShoppingCartState {
  products: ShoppingCartItem[]
}

export const CartReducer = (state:ShoppingCartState, action: Action):ShoppingCartState => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD_ITEM':
      return {...state, products: [...state.products, {...payload, quantity: 1}]};
    case 'REMOVE_ITEM':
      return {...state, products: state.products.filter((item)=> item.id !== payload.id)}
    default:
      return state;
  }
}