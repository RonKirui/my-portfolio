import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <div>
      <div className="footer-section">
        <div className="footer-section-divider"></div>
        <div className="footer-section-elements">
          <div className="interests">
            <h5>Positions Of Interest</h5>

            <div className="footer-underline"></div>
            <ul>
              <li>Android Developer</li>
              <li>React.js Developer</li>
              <li>Front-End Developer</li>
              <li>Back-End Developer</li>
              <li>Java Developer</li>
              <li>Spring-Boot Developer</li>
            </ul>
          </div>
          <div className="salary-range">
            <h5>Salary Range</h5>
            <div className="footer-underline"></div>
            <br />
            Annually
            <br />
            <span className="fade-text">Accepting custom offers</span>
            <br />
            Monthly
            <br />
            <span className="fade-text">Accepting custom offers</span>
            <br />
            Weekly
            <br />
            <span className="fade-text">Accepting custom offers</span>
            <br />
            Hourly
            <br />
            <span className="fade-text">Accepting custom offers</span>
            <br />
          </div>
          <div className="send-message">
            <h5>Send Message</h5>
            <div className="footer-underline"></div>
            <br />
            <div className="send-message-card">
              Do you have some projects you would want us to work on together?
              <Link className="nav-link-get-in-touch" to={"/contact"}>
                <button
                  className="btn getintouch"
                  onClick={() => {
                    scrollToTop();
                  }}
                >
                  Get In Touch
                </button>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
