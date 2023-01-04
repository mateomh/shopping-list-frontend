import { ProductData } from "../../types/dataTableTypes";

export interface Action {
  type: string;
  payload?: any;
}

export const AddCartItem = (data: ProductData):Action => {
  return {
    type: 'ADD_ITEM',
    payload: data,
  }
}

export const RemoveCartItem = (data: ProductData):Action => {
  return {
    type: 'REMOVE_ITEM',
    payload: data,
  }
}