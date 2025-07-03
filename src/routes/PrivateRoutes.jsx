import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Sidenav } from "../components/sidenav";

const PrivateRoutes = () => {
  return (
    <div>
      <Sidenav />
      <Header />

      <Outlet />
    </div>
  );
};

export default PrivateRoutes;
