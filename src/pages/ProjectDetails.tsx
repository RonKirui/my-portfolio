import { useParams } from "react-router-dom";
import imggg from "../assets/link.png";
import imgg from "../assets/git.png";
import data from "../data/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  // Find the project with matching ID
  const project = data.projects.find((p) => p.id === Number(id));

  // If ID doesn't exist show error
  if (!project) {
    return <h2>Project not found.</h2>;
  }

  return (
    <div className="project-details">
      <div
        className="project-details-container"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "fit-content",
          width: "100%",
        }}
      >
        <div
          className="details-container"
          style={{
            height: "100%",
            inset: 0,
            background: "rgba(0,0,0,0.7)", // opacity control
          }}
        >
          <div className="text-container">
            <h1>{project.name}</h1>
            <p>{project.description}</p>

            <div className="flex-teck-stack">
              {project.techStack.map((stack) => (
                <div className="stack">{stack}</div>
              ))}
            </div>
            <a href={project.github} target="_blank">
              <img src={imgg}></img>View on GitHub
            </a>
            <a href={project.live_demo} target="_blank">
              {" "}
              <img src={imggg}></img>Live Demo
            </a>
          </div>
          <div className="project-details-desc-container">
            <div className="grid">
              <h4>
                {project.title}
                <br />
                <br />
                Overview:
              </h4>
              <p>{project.overview}</p>
              <h4>Key Features:</h4>
              <div className="">
                {project.keyFeatures.map((stack) => (
                  <ul>
                    <li>{stack}</li>
                  </ul>
                ))}
              </div>
              <h4>Teck Stack:</h4>
              <div className="">
                {project.techStackDet.map((stack) => (
                  <ul>
                    <li>{stack}</li>
                  </ul>
                ))}
              </div>
              <h4>My Role:</h4>
              <div className="">
                {project.myRole.map((stack) => (
                  <ul>
                    <li>{stack}</li>
                  </ul>
                ))}
              </div>
              <br />
              <h4>Thanks for viewing this project!</h4>
              <p>
                If you’re interested in how it was built or want to discuss
                improvements or collaborations, I’d love to connect.
              </p>
            </div>
            <div className="grid-images">
              Project Gallery is currently empty. We are doing our best to sort
              the issue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
