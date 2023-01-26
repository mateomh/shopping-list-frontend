import { useState } from "react";
import DataTable from "../components/DataTable";
import ResultsDisplay from "../components/ResultsDisplay";
import { useShoppingCart } from "../utils/contexts/CartContext";
import { generateStoreList } from "../utils/data-loaders/data-loaders";
import { ProductData } from "../utils/types/dataTableTypes";
import { 
  faBagShopping
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ShoppingList/styles.css';

const ShoppingList:React.FC = () => {
  const cartContents = useShoppingCart();
  const [response, setResponse] = useState<any>({});
  const [showResults, setShowResults] = useState(false);
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
    if(Object.keys(data).length > 0){
      setShowResults(true);
    }
    setResponse(data);
  }

  return(
    <div>
      
      {
        showResults ?
        (<ResultsDisplay info={response}/>)
        :
        (
          <>
            <DataTable
                data = {cartContents.products as ProductData[]} 
                columnDefs = {columnDefs}
            />
            <button 
              onClick={onClick}
              className="get-results"
            >
              <FontAwesomeIcon icon={faBagShopping} />
              Get Results
            </button>
          </>
        )
      }
    </div>
  );
}

export default ShoppingList;