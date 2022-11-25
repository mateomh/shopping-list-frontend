export interface ProductsResponse {
  products: ProductData[];
}

export interface StoresResponse {
  stores: StoreData[];
}

export interface ProductData {
  id: number;
  name: string;
  quantity: string;
  description: string;
  image_url: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface StoreData {
  id: number;
  name: string;
  location: string;
  logo_url: string;
  created_at: string;
  updated_at: string;
}