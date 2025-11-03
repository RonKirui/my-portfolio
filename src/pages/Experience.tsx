interface ExperienceProps {
  experience_image: string;
}
function Experience({ experience_image }: ExperienceProps) {
  return (
    <div className="page-body">
      <div className="page-body-container">
        <span></span>
        <h2 className="page-body-container-text">Experience</h2>
        <span></span>
      </div>

      <div className="page-body-container-contents">
        <div className="page-body-container-contents-section">
          <div className="timeline-item">
            <div className="timeline-item-title">
              <div className="timeline-dot"></div>
              <h5>
                <div>Freelance Self-Employed </div>
                <div>2021 - Present</div>
              </h5>
            </div>
            <h6>Software Developer – Android Apps (Java, Kotlin)</h6>
            <ul>
              <li>
                Designed and implemented automation scripts using Selenium for
                platforms such as WhatsApp
              </li>
              <li>
                Built Android applications integrated with Firebase Database
              </li>
              <li>
                Developed a Tkinter-based desktop GUI toautomate repetitive
                browser tasks with user-input parameters.
              </li>
              <li>
                Created several web projects using HTML, CSS, and JavaScript
              </li>
              <li>
                Offered digital computer graphics and academic assistance
                throughFiverr and social media platforms
              </li>
            </ul>
          </div>

          <div className="timeline-item-title">
            <div className="timeline-dot"></div>
            <h5>
              <div>Freelance Self-Employed </div>
              <div>2021 - Present</div>
            </h5>
          </div>
          <h6>Software Developer – Android Apps (Java, Kotlin)</h6>
          <ul>
            <li>
              Designed and implemented automation scripts using Selenium for
              platforms such as WhatsApp
            </li>
            <li>
              Built Android applications integrated with Firebase Database
            </li>
            <li>
              Developed a Tkinter-based desktop GUI toautomate repetitive
              browser tasks with user-input parameters.
            </li>
            <li>
              Created several web projects using HTML, CSS, and JavaScript
            </li>
            <li>
              Offered digital computer graphics and academic assistance
              throughFiverr and social media platforms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
