interface PortfolioProps {
  image: string;
}
function Projects({ image }: PortfolioProps) {
  return (
    <div>
      <div className="body-page">
        <div className="project-container">
          <div className="porfolio-welcome">
            <h1>Welcome To My Portfolio</h1>
            <br />
            Here’s a collection of my projects showcasing creativity, precision,
            and problem-solving through code. Each project reflects my passion
            for building functional and visually appealing digital solutions.
            <br />
            If you’d like to explore more of my work and see the variety of
            projects I’ve developed, simply click the button below to discover
            more.
          </div>
          <button type="button" className="btn btn-outline-success">
            Check My GitHub
          </button>
          <div className="portfolio-section-divider"></div>
          <div className="projects-flex-container">
            <div className="card-container">
              <div className="card">
                <img src={image} className="" alt="..."></img>
              </div>
              <div className="card-project-text">
                <h5>
                  <a>TeaPlus</a>
                </h5>
                <h6>
                  An Android app built in Java that enables tea farmers to
                  record, track and manage tea leaves production.
                </h6>
              </div>
              <div className="flex-teck-stack">
                <span>SDK Android</span>
                <span>Java</span>
                <span>Real-time Firebase</span>
                <span>Firebase</span>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <img src={image} className="" alt="..."></img>
              </div>
              <div className="card-project-text">
                <h5>
                  <a>TeaPlus</a>
                </h5>
                <h6>
                  An Android app built in Java that enables tea farmers to
                  record, track and manage tea leaves production.
                </h6>
              </div>
              <div className="flex-teck-stack">
                <span>SDK Android</span>
                <span>Java</span>
                <span>Real-time Firebase</span>
                <span>Firebase</span>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <img src={image} className="" alt="..."></img>
              </div>
              <div className="card-project-text">
                <h5>
                  <a>TeaPlus</a>
                </h5>
                <h6>
                  An Android app built in Java that enables tea farmers to
                  record, track and manage tea leaves production.
                </h6>
              </div>
              <div className="flex-teck-stack">
                <span>SDK Android</span>
                <span>Java</span>
                <span>Real-time Firebase</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
