import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search_ic from "../assets/search.png";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div className="blog-container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="blog-navbar-brand">
            <img src={logo}></img>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="" type="submit">
              <img className="search-ic" src={search_ic}></img>
            </button>
          </form>
        </div>
      </nav>
      <div className="blog-content-section">
        <h1>Blog</h1>
        <div className="blog-content-section-elements">
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
