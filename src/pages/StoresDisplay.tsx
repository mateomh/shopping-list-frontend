import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import DataTable from "../components/DataTable";
import { StoreData } from "../utils/types/dataTableTypes";

const StoreImage = require('../assets/images/stores.jpg');

const StoresDisplay:React.FC = () => {
  const stores = useLoaderData() as StoreData[];
  const columnDefs = [
    { headerName: 'ID', field: "id", resizable: true },
    { headerName: 'Name', field: "name", resizable: true },
    { headerName: 'Location', field: "location", resizable: true },
    { headerName: 'Image', field: "logo_url", resizable: true },
    // { headerName: 'Category ID', field: "category_id" },
    // { headerName: 'Created at', field: "created_at" },
    // { headerName: 'Updated at', field: "updated_at" },
  ]

  return(
    <div>
      <Banner
        title = "Stores"
        text = "Find the full list of available stores"
        image = {StoreImage}
      />
      <DataTable
        data = {stores}
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

export default StoresDisplay;