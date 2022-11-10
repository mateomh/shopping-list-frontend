import { useLoaderData } from "react-router-dom";
import DataTable from "../components/DataTable";
import { ProductData } from "../utils/types/dataTableTypes";

const ProductsDisplay:React.FC = () => {
  const products = useLoaderData() as ProductData[];

  console.log("$$$$$$$$$ PRODUCTS", products);
  return(
    <div>
      <hr />
      Banner
      <hr />
      <br />
      <hr />
      <DataTable
        data = {products} 
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