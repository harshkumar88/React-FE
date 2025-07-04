import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ROUTES, BREADCRUMBS } from "../constants/constant";

const Breadcrumb = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const crumbs = buildBreadcrumb(location.pathname);
    setBreadcrumbs(crumbs);
  }, [location]);

  const buildBreadcrumb = (pathname) => {
    if (
      /\/app\/content-library\/[^\/]+\/[^\/]+\/questionnaire/.test(pathname)
    ) {
      return BREADCRUMBS.QUESTIONNAIRE;
    }

    for (const key of Object.keys(ROUTES)) {
      if (pathname.includes(ROUTES[key])) {
        return BREADCRUMBS[key] || [];
      }
    }

    return [];
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap p-2 pl-1 list-none m-0">
        {console.log("Breadcrumbs:", breadcrumbs)}
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isSettings = breadcrumb.url === "settings";

          return (
            <li key={index} className="text-sm font-medium flex items-center">
              {!isLast ? (
                <Link
                  to={breadcrumb.url}
                  className={`text-blue-600 ${
                    isSettings ? "pointer-events-none text-opacity-50" : ""
                  }`}
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-gray-500">{breadcrumb.label}</span>
              )}
              {!isLast && <span className="mx-1 text-[#12344d]">{">"}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
