import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DataTable from "../components/DataTable";
import { ProductData } from "../utils/types/dataTableTypes";

const ProductImage = require('../assets/images/supermarket.jpg');

const ProductsDisplay:React.FC = () => {
  const products = useLoaderData() as ProductData[];
  const columnDefs = [
    { headerName: 'ID', field: "id", resizable: true },
    { headerName: 'Name', field: "name", resizable: true },
    { headerName: 'Quantity', field: "quantity", resizable: true },
    { headerName: 'Description', field: "description", resizable: true },
    { headerName: 'Image', field: "image_url", resizable: true },
    // { headerName: 'Category ID', field: "category_id" },
    // { headerName: 'Created at', field: "created_at" },
    // { headerName: 'Updated at', field: "updated_at" },
  ]

  console.log("$$$$$$$$$ PRODUCTS", products);

  return(
    <div>
      <Banner
        title = "Products"
        text = "Find the full list of products here" 
        image = {ProductImage}
      />
      <DataTable
        data = {products} 
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