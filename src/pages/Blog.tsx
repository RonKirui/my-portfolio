import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import BlogCard from "../components/BlogCard";
import { useState } from "react";

export default function Blog() {
  const [searchQuerry, setSearchQuerry] = useState("");

  return (
    <div className="blog-container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="blog-navbar-brand" to={"/"}>
            <img src={logo}></img>
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuerry}
              onChange={(e) => setSearchQuerry(e.target.value)}
            />
            {/* <button className="" type="submit">
              <img className="search-ic" src={search_ic}></img>
            </button> */}
          </form>
        </div>
      </nav>
      <div className="blog-content-section">
        <h1>Blog</h1>
        <div className="blog-content-section-elements">
          <BlogCard searchQuerry={searchQuerry} />
        </div>
      </div>
    </div>
  );
}
