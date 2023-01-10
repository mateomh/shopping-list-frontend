import DataTable from "../components/DataTable";
import { useShoppingCart } from "../utils/contexts/CartContext";
import { ProductData } from "../utils/types/dataTableTypes";

const ShoppingList:React.FC = () => {
  const cartContents = useShoppingCart();
  const columnDefs = [
    { headerName: 'Name', field: "name", resizable: true, headerCheckboxSelection: true,
      checkboxSelection: true, showDisabledCheckboxes: true, },
    { headerName: 'Quantity', field: "quantity", resizable: true },
    { headerName: 'Description', field: "description", resizable: true },
    { headerName: 'Image', field: "image_url", resizable: true },
  ];

  return(
    <div>
      <DataTable
          data = {cartContents.products as ProductData[]} 
          columnDefs = {columnDefs}
      />
    </div>
  );
}

export default ShoppingList;