// import storeData from '../../mock-responses/stores-response.json'
// import productData from '../../mock-responses/products-response.json'
import { ProductsResponse, StoresResponse } from '../types/dataTableTypes';

const apiUrl = "http://localhost:3929";

const fetchData = async (url:string, options:Object):Promise<any> => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    });
}

export const storesLoader = async ():Promise<Object> => {
  const storesUrl = `${apiUrl}/stores/all`;
  const options = {
    method: 'GET',
  }

  const data:StoresResponse = await fetchData(storesUrl, options);
  return data?.stores;
}

export const productsLoader = async ():Promise<Object> => {
  const productsUrl = `${apiUrl}/products/all`;
  const options = {
    method: 'GET',
  }
  const data:ProductsResponse = await fetchData(productsUrl, options);
  return data?.products;
}