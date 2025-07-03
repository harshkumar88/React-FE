import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SidenavContext } from "../context/SidenavContext";
import { TenantContext } from "../context/TenantContext";
import { UserContext } from "../context/UserContext";
import { CONSTANTS } from "../constants/constants";
import { getCompanyById } from "../services/companyService";

export const Sidenav = () => {
  const { t } = useTranslation();
  //const navigate = useNavigate();
  const location = useLocation();

  // const { isExpanded } = useContext(SidenavContext);
  const { currentTenantID, currentTenantName } = useContext(TenantContext);
  const { currentRole } = useContext(UserContext);

  const [menus, setMenus] = useState([]);
  const [tenantData, setTenantData] = useState(null);

  const chiefAdminMenuList = [
    {
      name: t("menu.allCompanies"),
      link: CONSTANTS.routes.COMPANIES,
      icon: "allcompanies",
    },
    {
      name: t("menu.allUsers"),
      link: CONSTANTS.routes.USERS,
      icon: "allusers",
    },
  ];

  const companyAdminMenuList = [
    {
      name: t("menu.allCompanies"),
      link: CONSTANTS.routes.COMPANIES,
      icon: "allcompanies",
    },
  ];

  useEffect(() => {
    if (currentTenantID) {
      getCompanyById(currentTenantID).then((res) => {
        if (res.code === 200) {
          setTenantData(res.data);
        }
      });
    }
  }, [currentTenantID]);

  useEffect(() => {
    assignMenusBasedOnRole();
  }, [location.pathname, currentRole, tenantData]);

  const buildTenantPath = (path) =>
    currentTenantID ? `/${currentTenantID}:${currentTenantName}${path}` : path;

  const assignMenusBasedOnRole = () => {
    const isCompaniesOrUsers =
      location.pathname.includes(CONSTANTS.routes.COMPANIES) ||
      location.pathname.includes(CONSTANTS.routes.USERS);

    if (isCompaniesOrUsers && currentRole === CONSTANTS.roles.CHIEF_ADMIN) {
      setMenus(chiefAdminMenuList);
    } else if (
      location.pathname.includes(CONSTANTS.routes.COMPANIES) &&
      [
        CONSTANTS.roles.COMPANY_ADMIN,
        CONSTANTS.roles.SUPPORT_USER,
        CONSTANTS.roles.USER,
      ].includes(currentRole)
    ) {
      setMenus(companyAdminMenuList);
    } else {
      const baseMenus = [
        {
          name: t("menu.employeeList"),
          link: buildTenantPath(CONSTANTS.routes.EMPLOYEES),
          icon: "employeeList",
        },
        {
          name: t("menu.cohorts"),
          link: buildTenantPath(CONSTANTS.routes.COHORTS),
          icon: "cohorts",
        },
        {
          name: t("menu.templates"),
          link: buildTenantPath(CONSTANTS.routes.TEMPLATES),
          icon: "template",
        },
        {
          name: t("menu.journeys"),
          link: buildTenantPath(CONSTANTS.routes.JOURNEYS),
          icon: "journeys",
        },
        {
          name: t("menu.campaigns"),
          link: buildTenantPath(CONSTANTS.routes.CAMPAIGNS),
          icon: "campaigns",
        },
        {
          name: t("menu.workflows"),
          link: buildTenantPath(CONSTANTS.routes.WORKFLOWS),
          icon: "workflows",
          key: "workflow",
        },
        {
          name: t("Dashboard"),
          link: buildTenantPath(CONSTANTS.routes.DASHBOARD),
          icon: "dashboard",
        },
        {
          name: t("contentLibrary.contentLibrary"),
          link: buildTenantPath(CONSTANTS.routes.CONTENT_LIBRARY),
          icon: "library",
        },
        {
          name: t("menu.certificates"),
          link: buildTenantPath(CONSTANTS.routes.CERTIFICATES),
          icon: "certificates",
        },
        {
          name: t("menu.settings"),
          icon: "settings",
          children: [
            {
              name: t("menu.userManagement"),
              children: [
                {
                  name: t("variables.manageVariables"),
                  link: buildTenantPath(CONSTANTS.routes.VARIABLES),
                },
                {
                  name: t("permission.permissionGroups"),
                  link: buildTenantPath(CONSTANTS.routes.PERMISSIONS),
                },
              ],
            },
            {
              name: t("menu.organization"),
              children: [
                {
                  name: t("communications.communication"),
                  link: buildTenantPath(CONSTANTS.routes.COMMUNICATIONS),
                },
                {
                  name: t("leaderboard.leaderboard"),
                  link: buildTenantPath(CONSTANTS.routes.LEADERBOARD_CONFIG),
                },
              ],
            },
          ],
        },
      ];

      const filteredMenus = baseMenus.filter(
        (menu) => !menu.key || (tenantData && tenantData[menu.key])
      );

      setMenus(filteredMenus);
    }
  };

  return (
    <aside
      className={`h-screen sticky top-0 z-[1051] transition-all duration-300 ${
        isExpanded ? "w-64 pr-2" : "w-16"
      } bg-primary border-r-2 border-primary box-border`}
    >
      <div className="h-full p-2 overflow-y-auto">
        {menus.map((menu, idx) =>
          menu.children?.length ? (
            <div key={idx}>
              <span className="text-white text-xs font-semibold pl-3">
                {menu.name}
              </span>
              {menu.children.map((child, cIdx) => (
                <NavLink
                  key={cIdx}
                  to={child.link}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded text-white ${
                      isActive ? "bg-white text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  <span className="truncate ml-2">{child.name}</span>
                </NavLink>
              ))}
            </div>
          ) : (
            <NavLink
              key={idx}
              to={menu.link}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded text-white ${
                  isActive ? "bg-white text-orange-500 font-semibold" : ""
                }`
              }
            >
              <span className="truncate ml-2">{menu.name}</span>
            </NavLink>
          )
        )}
      </div>
    </aside>
  );
};
