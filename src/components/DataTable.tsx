import { AgGridReact } from "ag-grid-react";
import { ProductData, StoreData } from "../utils/types/dataTableTypes";
import './DataTable/styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useCallback, useEffect, useRef, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useLocation } from "react-router-dom";

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
  
  useEffect(() => {
    console.log("$$$$$$$$REF",gridRef.current);
  }, [data])

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    console.log("%%%%%%%%%%% SELECTED", selectedRows.length);

    if(selectedRows.length > 0) {
      setShowAddToCart(true);
    } else {
      setShowAddToCart(false);
    }

  }, []);

  const onAddToCart = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    console.log("%%%%%%%%%%% SELECTED", selectedRows);
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