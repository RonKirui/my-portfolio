import data from "../data/projects.json";
import github_img from "../assets/github2.png";
import live_img from "../assets/internet.png";

export default function ProjectCard() {
  return data.projects.map((project) => (
    <div className="card-container" key={project.id}>
      <div className="card">
        <img src={project.image} className="" alt={project.title}></img>
      </div>
      <div className="card-project-text">
        <h5>
          <a>{project.title}</a>
        </h5>
        <h6>{project.description}</h6>
      </div>
      <div className="flex-teck-stack">
        {project.tech_stack.map((stack) => (
          <div>{stack}</div>
        ))}
      </div>
      <div className="flex-teck-stack">
        <a href={project.github} target="_blank">
          <img src={github_img}></img>GitHub
        </a>
        <a href={project.live_demo} target="_blank">
          <img src={live_img}></img>Live Demo
        </a>
      </div>
    </div>
  ));
}
