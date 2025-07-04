import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Roles, ROUTES } from "../constants/constant";
import "./sidenav.component.scss";

export const Sidenav = () => {
  const location = useLocation();

  const [menus, setMenus] = useState([]);
  const [tenantData, setTenantData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const chiefAdminMenuList = [
    {
      name: "Companies",
      link: ROUTES.COMPANIES,
      icon: "allcompanies",
    },
    {
      name: "All Users",
      link: ROUTES.USERS,
      icon: "allusers",
    },
  ];

  const companyAdminMenuList = [
    {
      name: "All Companies",
      link: ROUTES.COMPANIES,
      icon: "allcompanies",
    },
  ];
  const defaultMenuList = () => [
    {
      name: "Employee List",
      link: ROUTES.EMPLOYEES,
      icon: "employeeList",
    },
    {
      name: "Cohorts",
      link: ROUTES.COHORTS,
      icon: "cohorts",
    },
    {
      name: "Templates",
      link: ROUTES.TEMPLATES,
      icon: "template",
    },
    {
      name: "Journeys",
      link: ROUTES.JOURNEYS,
      icon: "journeys",
    },
    {
      name: "Campaigns",
      link: ROUTES.CAMPAIGNS,
      icon: "campaigns",
    },
    {
      name: "Dashboard",
      link: ROUTES.DASHBOARD,
      icon: "workflows",
    },
    {
      name: "Settings",
      icon: "settings",
      children: [
        {
          name: "User Management",
          children: [
            {
              name: "Manage Variables",
              icon: "settings",
              link: ROUTES.VARIABLES,
            },
            {
              name: "Permission Groups",
              icon: "settings",
              link: ROUTES.PERMISSIONS,
            },
          ],
        },
        {
          name: "Organization",
          children: [
            {
              name: "Communications",
              icon: "settings",
              link: ROUTES.COMMUNICATIONS,
            },
            {
              name: "Leaderboard",
              icon: "settings",
              link: ROUTES.LEADERBOARD_CONFIG,
            },
          ],
        },
      ],
    },
  ];

  const assignMenus = async () => {
    const baseMenus = defaultMenuList();
    setMenus(baseMenus);
  };

  useEffect(() => {
    assignMenus();
  }, [location.pathname]);

  const renderMenu = (menu, key) => {
    if (menu.children?.length) {
      return (
        <div key={key}>
          <span className="text-xs text-white pl-4 font-semibold block mb-1">
            {menu.name}
          </span>
          {menu.children.map((child, cIdx) =>
            renderMenu(child, `${key}-${cIdx}`)
          )}
        </div>
      );
    }
  };

  return (
    <aside
      className={`h-screen sticky top-0 z-[1051] transition-all duration-300  box-border sidenav-body-container ${
        isExpanded ? "w-64 pr-2" : "w-16"
      }`}
    >
      <div className="h-full p-2 overflow-y-auto sidenav-body">
        {menus.map((menu, idx) =>
          menu.children?.length ? (
            <div key={idx} className="dropdown-menu-wrapper group relative">
              <div className="flex items-center px-3 py-2 rounded text-white cursor-pointer">
                <span className="truncate ml-2 text-container">
                  {menu.name}
                </span>
              </div>

              <div className="dropdown-section absolute left-full top-0 ml-2 hidden group-hover:block">
                {menu.children.map((child, cIdx) => (
                  <NavLink
                    key={cIdx}
                    to={child.link}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded dropdown-item ${
                        isActive
                          ? "bg-white text-orange-500 font-semibold active"
                          : "text-white"
                      }`
                    }
                  >
                    <span className="truncate ml-2 text-container">
                      {child.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={idx}
              to={menu.link}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded text-white ${
                  isActive
                    ? "bg-white text-orange-500 font-semibold active"
                    : ""
                }`
              }
            >
              <span className="truncate ml-2 text-container">{menu.name}</span>
            </NavLink>
          )
        )}
      </div>
    </aside>
  );
};
