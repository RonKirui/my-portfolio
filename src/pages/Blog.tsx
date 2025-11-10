import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <Link className="nav-link" to={"/blog"}>
      <button type="button" className="btn btn-outline-success">
        Coming soon!
      </button>
    </Link>
  );
}
