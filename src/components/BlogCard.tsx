import data from "../data/blog.json";
import like_ic from "../assets/like_ic.png";
import comment_ic from "../assets/comment_ic.png";
import { useState } from "react";
interface BlogProps {
  searchQuerry: string;
}
export default function BlogCard({ searchQuerry }: BlogProps) {
  const [blogs, setBlogs] = useState(data.projects);
  const increaseLikes = (id: number) => {
    const updated = blogs.map((blog) =>
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    );

    setBlogs(updated);
  };
  return data.projects.map(
    (project) =>
      project.title.toLowerCase().includes(searchQuerry) && (
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
              <img
                src={like_ic}
                onClick={() => increaseLikes(project.id)}
              ></img>
            </a>
            <a href="" target="_blank">
              <img src={comment_ic}></img>
            </a>
          </div>
        </div>
      )
  );
}
