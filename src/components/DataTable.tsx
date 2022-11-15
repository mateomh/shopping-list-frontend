import { AgGridReact } from "ag-grid-react";
import { ProductData, StoreData } from "../utils/types/dataTableTypes";
import './DataTable/styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useEffect, useRef } from "react";

interface DataTableProps {
  data: ProductData[] | StoreData[];
  columnDefs: Object[];
}

const DataTable:React.FC<DataTableProps> = ({
  data = [],
  columnDefs = []
}) => {
  const gridRef = useRef<any>();
  
  useEffect(() => {
    console.log("$$$$$$$$REF",gridRef.current)
  }, [data])
  
  return(
    <div className="ag-theme-alpine data-table-container">
      <AgGridReact
        ref = {gridRef}
        rowData = {data as any}
        columnDefs = {columnDefs} 
      >
      </AgGridReact>
    </div>
  );
}

export default DataTable;