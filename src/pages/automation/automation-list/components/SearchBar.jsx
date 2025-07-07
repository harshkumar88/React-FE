import React from "react";
import './styles/searchBar.scss';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-container flex items-center gap-2">
      <div className="svg-search">
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#5B5E66"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9999 21L16.6499 16.65"
            stroke="#5B5E66"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search automations..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={`form-control search py-1`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
