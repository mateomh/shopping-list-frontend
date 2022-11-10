import { AgGridReact } from "ag-grid-react";
import { ProductData } from "../utils/types/dataTableTypes";
import './DataTable/styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useEffect, useRef } from "react";

interface DataTableProps {
  data: ProductData[];
}

const DataTable:React.FC<DataTableProps> = ({
  data = []
}) => {
  const gridRef = useRef<any>();
  
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

  useEffect(() => {
    console.log("$$$$$$$$REF",gridRef.current)
  }, [data])
  
  return(
    <div className="ag-theme-alpine data-table-container">
      <AgGridReact
        ref = {gridRef}
        rowData = {data}
        columnDefs = {columnDefs} 
      >
      </AgGridReact>
    </div>
  );
}

export default DataTable;