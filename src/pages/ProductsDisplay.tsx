import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DataTable from "../components/DataTable";
import { ProductData } from "../utils/types/dataTableTypes";

const ProductImage = require('../assets/images/supermarket.jpg');

const ProductsDisplay:React.FC = () => {
  const products = useLoaderData() as ProductData[];
  const [sortedProducts, setSortedProducts] = useState(products);
  const columnDefs = [
    { headerName: 'Name', field: "name", resizable: true, headerCheckboxSelection: true,
      checkboxSelection: true, showDisabledCheckboxes: true, },
    { headerName: 'Quantity', field: "quantity", resizable: true },
    { headerName: 'Description', field: "description", resizable: true },
    { headerName: 'Image', field: "image_url", resizable: true },
  ];

  useEffect(() => {
    setSortedProducts(
      products.sort((product1, product2) => {
        return product1.name.localeCompare(product2.name)
      })
    );
  }, [products]);

  return(
    <div>
      <Banner
        title = "Products"
        text = "Find the full list of products here" 
        image = {ProductImage}
      />
      <DataTable
        data = {sortedProducts} 
        columnDefs = {columnDefs}
      />
      <hr />
      <br />
      <hr />
      Footer
      <hr />
    </div>
  );
} 

export default ProductsDisplay;