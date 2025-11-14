import data from "../data/blog.json";
import like_ic from "../assets/like_ic.png";
import comment_ic from "../assets/comment_ic.png";
export default function BlogCard() {
  return data.projects.map((project) => (
    <div className="card-container bg-w" key={project.id}>
      <div className="card">
        <img src={project.image} className="" alt={project.title}></img>
      </div>
      <div className="card-blog-text">
        <h5>
          <a>{project.title}</a>
        </h5>
        <h6>{project.description}</h6>
      </div>
      <div className="action-section">
        <a href="" target="_blank">
          <img src={like_ic}></img>
        </a>
        <a href="" target="_blank">
          <img src={comment_ic}></img>
        </a>
      </div>
    </div>
  ));
}
