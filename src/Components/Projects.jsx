import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Projects = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(16, 15, 55, 1)" }}
    >
      <Header />
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <div className="col-md-3 text-center" id="lists">
          <img src="project1.png" alt="project1" height={300} width={300} />
          <h3>Portfolio</h3>
          <h3>Frontend</h3>
          <div className="col-md-12">
            <img src="figma.png" alt="figma" />
            <img src="Html 5.png" alt="html" />
            <img src="Tailwind CSS.png" alt="tailwindcss" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
        <div className="offset-1 col-md-3 text-center" id="lists">
          <img src="captcha.png" alt="project1" height={300} width={300} />
          <h3>Captcha Generator</h3>
          <h3>Frontend</h3>
          <div className="col-md-12">
            <img src="Html 5.png" alt="html" />
            <img src="CSS3.png" alt="css" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
        <div className="offset-1 col-md-3 offset-1 text-center" id="lists">
          <img src="ecommerce.png" alt="project1" height={300} width={300} />
          <h3>E-commerce</h3>
          <h3>Frontend</h3>
          <div className="col-md-12">
            <img src="Html 5.png" alt="html" />
            <img src="CSS3.png" alt="css" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <div className="col-md-3 text-center" id="lists">
          <img
            src="ticketbooking.png"
            alt="project1"
            height={300}
            width={300}
          />
          <h3>Ticket Booking</h3>
          <h3>UI / UX</h3>
          <div className="col-md-12">
            <img src="figma.png" alt="figma" />
          </div>
        </div>
        <div className="offset-1 col-md-3 text-center" id="lists">
          <img src="filesharing.png" alt="project1" height={300} width={300} />
          <h3>File Sharing Website</h3>
          <h3>ProjectSend</h3>
          <div className="col-md-12">
            <img src="projectsend.png" alt="html" />
          </div>
        </div>
        <div className="offset-1 col-md-3 offset-1 text-center" id="lists">
          <img src="foodblog.png" alt="project1" height={300} width={300} />
          <h3>Food Blog</h3>
          <h3>Wordpress</h3>
          <div className="col-md-12">
            <img src="WordPress.png" alt="html" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
