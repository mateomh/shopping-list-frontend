import { AgGridReact } from "ag-grid-react";
import { ProductData, StoreData } from "../utils/types/dataTableTypes";
import './DataTable/styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useCallback, useEffect, useRef, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useLocation } from "react-router-dom";
import { useChangeShoppingCart } from "../utils/contexts/CartContext";
import { AddCartItem } from "../utils/contexts/reducers/Actions";

interface DataTableProps {
  data: ProductData[] | StoreData[];
  columnDefs: Object[];
}

const DataTable:React.FC<DataTableProps> = ({
  data = [],
  columnDefs = []
}) => {
  const gridRef = useRef<any>();
  const location = useLocation();
  const [showAddToCart, setShowAddToCart] = useState(false);
  const {changeCartState: dispatch} = useChangeShoppingCart();

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();

    if(selectedRows.length > 0) {
      setShowAddToCart(true);
    } else {
      setShowAddToCart(false);
    }

  }, []);

  const onAddToCart = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    selectedRows.map((item:ProductData) => dispatch(AddCartItem(item)));
  } 
  
  return(
    <>
      <div className="ag-theme-alpine data-table-container">
        <AgGridReact
          ref = {gridRef}
          rowData = {data as any}
          columnDefs = {columnDefs}
          rowSelection = 'multiple'
          rowMultiSelectWithClick = {true}
          onSelectionChanged ={onSelectionChanged}
        >
        </AgGridReact>
      </div>
      {
        location.pathname === "/products" &&
        showAddToCart && 
        <AddToCartButton callBack={onAddToCart}/>
      }
    </>
  );
}

export default DataTable;