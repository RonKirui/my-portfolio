import data from "../data/blog.json";
interface BlogProps {
  searchQuerry: string;
}
export default function BlogCard({ searchQuerry }: BlogProps) {
  return data.projects.map(
    (project) =>
      project.title.toLowerCase().includes(searchQuerry.toLowerCase()) && (
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
          {/*}
          <div className="action-section">
            <a href="" target="_blank">
              <img
                src={like_ic}
                onClick={() => increaseLikes(project.id)}
              ></img>
            </a>
            <a href="" target="_blank">
              <img src={comment_ic}></img>
            </a>
          </div>*/}
        </div>
      )
  );
}
