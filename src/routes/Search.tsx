import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Share/Footer";
import Header from "../components/Share/Header";
import MetaTag from "../components/Share/MetaTag";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query) return;
    const user = searchParams.get("user") ?? "";
    setSearchParams({ query: query, user: user });
    getResults(query, user);
  };

  const getResults = async (query: string, user = "") => {};

  useEffect(() => {
    const query = searchParams.get("query");
    setQuery(query ?? "");
    if (query) getResults(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Search d-flex flex-column min-vh-100 overflow-hidden">
      <MetaTag title="myBlog" description="Search user posts" />
      <Header title="Search" />
      <section className="flex-grow-1">
        <div className="row">
          <div className="col col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <form className="d-flex align-items-end" onSubmit={onSubmit}>
              <div className="flex-grow-1 me-3">
                <label className="form-label">
                  {searchParams.get("user") ? `Search ${searchParams.get("user")}'s posts` : "Search all posts"}
                </label>
                <input type="text" className="form-control" value={query} onChange={onChange} required />
              </div>
              <button type="submit" className="btn btn-outline-success w-80px h-40px">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
