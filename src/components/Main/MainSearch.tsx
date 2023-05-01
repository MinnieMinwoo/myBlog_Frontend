import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?user=${query}`);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };

  return (
    <div className="SearchBox d-inline-block align-middle me-2 me-md-4" onSubmit={onSubmit}>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 d-inline-block"
          type="search"
          placeholder="Find user"
          aria-label="Search"
          value={query}
          onChange={onChange}
        />
        <button className="btn btn-outline-success d-none d-md-inline-block" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MainSearch;
