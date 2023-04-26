import React from "react";

const HeaderSearch = () => {
  return (
    <div className="SearchBox d-none d-sm-inline-block align-middle me-2 me-md-4">
      <form className="d-flex" role="search">
        <input className="form-control me-md-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success d-none d-md-inline-block" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
