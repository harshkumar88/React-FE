import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Sidenav } from "../components/sidenav";

const PrivateRoutes = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidenav />
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default PrivateRoutes;
