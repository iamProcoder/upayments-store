import { Outlet } from "react-router-dom";

import CheckJwt from "../helpers/CheckJwt";
import Register from "../pages/Register";

const ProtectedRoutes = () => {  
  const isAuth: boolean = CheckJwt();
  return isAuth ? <Outlet /> : <Register />;
}

export default ProtectedRoutes