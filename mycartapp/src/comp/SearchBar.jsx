import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
