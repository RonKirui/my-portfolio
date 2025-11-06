function Footer() {
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
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="yourname" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="youremail" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imputsubject"
                  placeholder="Enter Email Subject"
                />
              </div>
              <div className="col-12 r-5">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputmessage"
                  placeholder="Enter Your MEssage"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
