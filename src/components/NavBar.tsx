import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  logo: string;
}

function NavBar({ logo }: NavBarProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const navRef = useRef<HTMLDivElement>(null); // reference to navbar container
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeMenu = () => setIsNavCollapsed(true);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };
  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg shadow-sm navbar-dark navbar-custom"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" onClick={closeMenu} to={"/"}>
          <img
            src={logo}
            className="logo img-fluid w-100 rounded-circle"
            alt="RK"
          ></img>
        </Link>
        <button
          className="navbar-toggler btn-primary"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                to={"/portfolio"}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/blog"}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="btn btn-outline-success"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
