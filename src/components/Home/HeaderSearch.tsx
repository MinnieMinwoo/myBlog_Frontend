import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [query, setQuery] = useState("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { userID } = params;
    const { innerWidth } = window;
    if (innerWidth < 768) navigate(`/search?query=&user=${userID}`);
    else navigate(`/search?query=${query}&user=${userID}`);
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
          className="form-control me-md-2 d-none d-md-inline-block"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={onChange}
        />
        <button className="btn btn-outline-success d-inline-block" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
