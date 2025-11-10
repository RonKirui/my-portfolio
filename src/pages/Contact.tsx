import { useState } from "react";

interface ContactProps {
  images: string[];
}

function Contact({ images }: ContactProps) {
  const [name, setName] = useState("");

  return (
    <div className="body-page-h contact-section">
      <div className="project-container">
        <div className="porfolio-welcome">
          <h1>STAY IN TOUCH</h1>
          I’d love to hear from you! Whether you have a project in mind, a
          question, or just want to say hello, feel free to reach out.
          <br />
          <br />
          <span className="contact-det">
            +254705-807-312 | +254705-200-756 , ronkiruiplandi@gmail.com
          </span>
        </div>

        <div className="contact-icon-flex">
          <a
            href="https://www.github.com/RonKirui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images[0]} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ronald-kiplangat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images[1]} alt="LinkedIn" />
          </a>
          <a>
            <img src={images[2]} alt="Other" />
          </a>
        </div>

        <div className="portfolio-section-divider"></div>

        <form>
          <div className="name-email-flex">
            <div className="c-flex">
              <label className="input-label">Your Name</label>
              <input
                className="input-field"
                type="text"
                id="inputname"
                placeholder="Enter your name here..."
              />
            </div>
            <div className="c-flex">
              <label className="input-label">Email</label>
              <input
                className="input-field"
                type="text"
                id="inputemail"
                placeholder="Enter your email here..."
              />
            </div>
          </div>
          <label className="input-label">Subject</label>
          <input
            className="input-field"
            type="text"
            id="inputsubject"
            placeholder="Enter Message subject here..."
          />
          <label className="input-label">Message</label>
          <textarea
            className="input-field"
            id="inputmessage"
            placeholder="Write your message here..."
          />
          <button type="button" className="btn btn-primary btn-send-msg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
