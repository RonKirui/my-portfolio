import emailjs from "@emailjs/browser";
import { useRef } from "react";
interface ContactProps {
  images: string[];
}

function Contact({ images }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqhxn26", // your EmailJS Service ID
        "template_z4bth5r", // your Template ID
        form.current!,
        "cY1lddohMVMAtU8CH" // your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          alert("Your message was sent successfully!");
          (form.current as HTMLFormElement).reset(); // clear the form
        },
        (error) => {
          console.error("❌ Error sending message:", error.text);
          alert("Oops! Something went wrong, please try again later.");
        }
      );
  };
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

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="name-email-flex">
            <div className="c-flex">
              <label className="input-label">Your Name</label>
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Enter your name here..."
                required
              />
            </div>
            <div className="c-flex">
              <label className="input-label">Email</label>
              <input
                className="input-field"
                type="text"
                name="inputemail"
                placeholder="Enter your email here..."
                required
              />
            </div>
          </div>
          <label className="input-label">Subject</label>
          <input
            className="input-field"
            type="text"
            name="inputsubject"
            placeholder="Enter Message subject here..."
            required
          />
          <label className="input-label">Message</label>
          <textarea
            className="input-field"
            name="message"
            placeholder="Write your message here..."
            required
          />
          <div className="button-send-message">
            <button type="submit" className="btn btn-primary btn-send-msg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
