import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search automations..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border border-gray-300 px-3 py-2 rounded w-full max-w-sm"
    />
  );
};

export default SearchBar;
