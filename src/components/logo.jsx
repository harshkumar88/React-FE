import React from "react";
import AppLogo from "/public/svg/AppLogo";

const Icon = ({ name, className = "w-5 h-5" }) => {
  if (!name) return null;
  return (
    <svg className={className} aria-hidden="true">
      <use xlinkHref={`/svg/svgDefinitions.svg#${name}`} />
    </svg>
  );
};

export const Logo = ({ isExpanded }) => {
  return (
    <div className="app-logo">
      {isExpanded ? (
        <AppLogo />
      ) : (
        <Icon
          name={"linemateIcon"}
          className="w-12 h-10 flex items-center justify-center ms-[0.1rem] mb-2"
        />
      )}
    </div>
  );
};

export default Logo;
