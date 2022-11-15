import storeData from '../../mock-responses/stores-response.json'
import productData from '../../mock-responses/products-response.json'

export const storesLoader = () => {
  return storeData.stores;
}

export const productsLoader = () => {
  return productData.products;
}