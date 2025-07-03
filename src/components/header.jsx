import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import SvgIcon from "../components/SvgIcon";
import { ROUTES } from "../constants/constant";
import { getInitials } from "../handlers/auth";

const Header = () => {
  const [userInitials, setUserInitials] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserInitials(
      getInitials({
        firstName: "John", // Replace with actual user data
        lastName: "Doe", // Replace with actual user data
      })
    );
  }, []);

  //   const handleLogout = () => {
  //     logoutUser();
  //     navigate(ROUTES.LOGIN);
  //   };

  const goToCompanies = () => {
    navigate(ROUTES.COMPANIES);
  };

  return (
    <div className="w-full shadow-sm h-15 flex items-center px-5 z-[1051] box-border">
      <Breadcrumb />
      <div className="relative ml-auto">
        <button
          type="button"
          className="h-10 w-10 rounded-full border border-[#ffd0d6] bg-[#ffecf0] text-[#c82124] font-semibold text-base flex items-center justify-center"
          onClick={() =>
            document.getElementById("userDropdown").classList.toggle("hidden")
          }
        >
          {userInitials}
        </button>

        <div
          id="userDropdown"
          className="absolute hidden top-[2.8rem] left-[-7.7rem] w-45 p-2 bg-white rounded-lg shadow-[0px_4px_16px_0px_rgba(0,75,139,0.16)]"
        >
          <div className="flex items-center p-2 rounded-lg hover:bg-[#fef1e1] hover:font-semibold cursor-pointer">
            <SvgIcon
              name="profile"
              width="1rem"
              height="1rem"
              className="mr-2 text-[#264966]"
            />
            <span>Profile Settings</span>
          </div>
          <div
            className="flex items-center p-2 rounded-lg hover:bg-[#fef1e1] hover:font-semibold cursor-pointer"
            onClick={goToCompanies}
          >
            <SvgIcon
              name="allcompanies"
              width="1rem"
              height="1rem"
              className="mr-2 text-[#264966]"
            />
            <span>All Companies</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-[#fef1e1] hover:font-semibold cursor-pointer">
            <SvgIcon
              name="signout"
              width="1rem"
              height="1rem"
              className="mr-2 text-[#264966]"
            />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
