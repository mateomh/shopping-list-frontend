import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppWrapper:React.FC = () => {
  return(
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppWrapper;