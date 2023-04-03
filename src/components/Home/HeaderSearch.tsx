import React from "react";
import search from "../../assets/images/search.png";

const HeaderSearch = () => {
  return (
    <div className="SearchBox d-inline-block me-3 mt-4">
      <img
        className="img-thumbnail rounded-circle w-50px h-50px fs-0"
        src={search}
        alt="search"
        role="button"
      />
    </div>
  );
};

export default HeaderSearch;
