import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/constant";
import { Logo } from "./Logo";
import "./sidenav.component.scss";

const Icon = ({ name, className = "w-5 h-5" }) => {
  if (!name) return null;
  return (
    <svg className={className} aria-hidden="true">
      <use xlinkHref={`/svg/svgDefinitions.svg#${name}`} />
    </svg>
  );
};

const ToggleButton = ({ onClick, isFlipped }) => {
  return (
    <div className="toggle-button-wrapper px-2 pb-1">
      <button
        onClick={onClick}
        className={`toggle-button ${isFlipped ? "is-flipped" : ""}`}
      >
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0.625C9.75 0.625 7.55 1.29 5.68 2.54C3.81 3.79 2.35 5.57 1.49 7.65C0.63 9.73 0.4 12.01 0.84 14.22C1.28 16.43 2.37 18.45 3.96 20.04C5.55 21.63 7.57 22.72 9.78 23.16C11.99 23.6 14.27 23.37 16.35 22.51C18.43 21.65 20.21 20.19 21.46 18.32C22.71 16.45 23.38 14.25 23.38 12C23.37 8.98 22.17 6.09 20.04 3.96C17.91 1.83 15.02 0.63 12 0.63ZM12 21.62C10.1 21.62 8.24 21.06 6.65 20C5.07 18.95 3.84 17.44 3.11 15.68C2.38 13.92 2.19 11.99 2.56 10.12C2.93 8.26 3.85 6.54 5.19 5.19C6.54 3.85 8.26 2.93 10.12 2.56C11.99 2.19 13.92 2.38 15.68 3.11C17.44 3.84 18.95 5.07 20 6.65C21.06 8.24 21.62 10.1 21.62 12C21.62 14.55 20.61 17 18.8 18.8C17 20.61 14.55 21.62 12 21.62ZM15.24 11.38C15.33 11.47 15.39 11.56 15.43 11.66C15.48 11.77 15.5 11.89 15.5 12C15.5 12.11 15.48 12.23 15.43 12.34C15.39 12.44 15.33 12.54 15.24 12.62L10.87 16.99C10.79 17.08 10.69 17.14 10.58 17.18C10.48 17.23 10.36 17.25 10.25 17.25C10.13 17.25 10.02 17.23 9.91 17.18C9.81 17.14 9.71 17.08 9.63 16.99C9.55 16.91 9.49 16.82 9.44 16.71C9.4 16.6 9.37 16.49 9.37 16.38C9.37 16.26 9.4 16.15 9.44 16.04C9.49 15.93 9.55 15.84 9.63 15.76L13.39 12L9.63 8.24C9.47 8.08 9.37 7.86 9.37 7.63C9.37 7.39 9.47 7.17 9.63 7.01C9.8 6.84 10.02 6.75 10.25 6.75C10.48 6.75 10.7 6.84 10.87 7.01L15.24 11.38Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-0.2"
              y1="3.5"
              x2="24.3"
              y2="4.0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DA529A" />
              <stop offset="1" stopColor="#ED7157" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export const Sidenav = () => {
  const location = useLocation();
  const [menus, setMenus] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const defaultMenuList = () => [
    { name: "Employee List", link: ROUTES.EMPLOYEES, icon: "employeeList" },
    { name: "Cohorts", link: ROUTES.COHORTS, icon: "cohorts" },
    { name: "Templates", link: ROUTES.TEMPLATES, icon: "template" },
    { name: "Journeys", link: ROUTES.JOURNEYS, icon: "journeys" },
    { name: "Campaigns", link: ROUTES.CAMPAIGNS, icon: "campaigns" },
    { name: "Dashboard", link: ROUTES.DASHBOARD, icon: "workflows" },
    { name: "Automation", link: ROUTES.AUTOMATION, icon: "template" },
    // {
    //   name: "Settings",
    //   icon: "settings",
    //   children: [
    //     {
    //       name: "User Management",
    //       children: [
    //         { name: "Manage Variables", link: ROUTES.VARIABLES, icon: "settings" },
    //         { name: "Permission Groups", link: ROUTES.PERMISSIONS, icon: "settings" },
    //       ],
    //     },
    //     {
    //       name: "Organization",
    //       children: [
    //         { name: "Communications", link: ROUTES.COMMUNICATIONS, icon: "settings" },
    //         { name: "Leaderboard", link: ROUTES.LEADERBOARD_CONFIG, icon: "settings" },
    //       ],
    //     },
    //   ],
    // },
  ];

  useEffect(() => {
    setMenus(defaultMenuList());
  }, [location.pathname]);

  const renderMenu = (menu, key) => {
    if (menu.children?.length) {
      return (
        <div key={key} className="dropdown-menu-wrapper group relative">
          <div className="flex items-center px-3 py-2 rounded text-white cursor-pointer">
            <Icon name={menu.icon} />
            {isExpanded && <span className="truncate ml-2">{menu.name}</span>}
          </div>
          {isExpanded && (
            <div className="dropdown-section absolute left-full top-0 ml-2 hidden group-hover:block bg-[#1f2937] p-2 rounded shadow-md z-10">
              {menu.children.map((child, cIdx) =>
                renderMenu(child, `${key}-${cIdx}`)
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={key}
        to={menu.link}
        className={({ isActive }) =>
          `flex items-center px-3 py-2 rounded text-white hover:bg-gray-700 transition ${
            isActive ? "bg-white text-orange-500 font-semibold" : ""
          }`
        }
      >
        <Icon name={menu.icon} />
        {isExpanded && <span className="truncate ml-2">{menu.name}</span>}
      </NavLink>
    );
  };

  return (
    <aside
      className={`h-screen sticky top-0 z-[1051] transition-all duration-300 bg-gray-900 sidenav-body-container flex flex-col items-start ${
        isExpanded ? "w-64 pr-2" : "w-16"
      }`}
    >
      <Logo isExpanded={isExpanded} />
      <ToggleButton
        onClick={() => setIsExpanded(!isExpanded)}
        isFlipped={isExpanded}
      />
      <div className=" overflow-y-auto sidenav-body">
        {menus.map((menu, idx) => renderMenu(menu, idx))}
      </div>
    </aside>
  );
};
