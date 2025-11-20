import data from "../data/projects.json";
import link_img from "../assets/link.png";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  return data.projects.map((project) => (
    <>
      <Link
        className="card-container"
        key={project.id}
        to={`/project-details/${project.id}`}
      >
        <div className="card">
          <img src={project.image} className="" alt={project.title}></img>

          <img src={link_img} className="imag-link" alt={project.title}></img>
        </div>
        <div className="card-project-text">
          <h5>
            <a>{project.title}</a>
          </h5>
          <h6>{project.description}</h6>
        </div>
        <div className="flex-teck-stack">
          {project.techStack.map((stack) => (
            <div>{stack}</div>
          ))}
        </div>
        {/*
        <div className="flex-teck-stack">
          <a href={project.github} target="_blank">
            <img src={github_img}></img>GitHub
          </a>
          <a href={project.live_demo} target="_blank">
            <img src={live_img}></img>Live Demo
          </a>
        </div>*/}
      </Link>
    </>
  ));
}
