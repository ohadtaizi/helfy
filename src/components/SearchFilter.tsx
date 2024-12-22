import React from "react";

const SearchFilter = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search products by title here..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
