import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Sidenav } from "../components/sidenav";

const PrivateRoutes = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidenav />
        <div className="flex-1 flex flex-col gap-10">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutes;
