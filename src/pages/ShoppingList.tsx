import { useState } from "react";
import DataTable from "../components/DataTable";
import ResultsDisplay from "../components/ResultsDisplay";
import { useShoppingCart } from "../utils/contexts/CartContext";
import { generateStoreList } from "../utils/data-loaders/data-loaders";
import { ProductData } from "../utils/types/dataTableTypes";

const ShoppingList:React.FC = () => {
  const cartContents = useShoppingCart();
  const [response, setResponse] = useState<any>({});
  const columnDefs = [
    { headerName: 'Name', field: "name", resizable: true, headerCheckboxSelection: true,
      checkboxSelection: true, showDisabledCheckboxes: true, },
    { headerName: 'Quantity', field: "quantity", resizable: true },
    { headerName: 'Description', field: "description", resizable: true },
    { headerName: 'Image', field: "image_url", resizable: true },
  ];

  const onClick = async () => {
    const cartContentsIds = cartContents.products.map(item => item.id);
    const data = await generateStoreList(cartContentsIds);
    setResponse(data);
  }

  return(
    <div>
      <button onClick={onClick}>Get information</button>
      <DataTable
          data = {cartContents.products as ProductData[]} 
          columnDefs = {columnDefs}
      />
      {
        Object.keys(response).length > 0 ?
        (<ResultsDisplay info={response}/>)
        : null
      }
    </div>
  );
}

export default ShoppingList;