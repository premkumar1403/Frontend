import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgba(16, 15, 55, 1)",
        color: "white",
        fontFamily: "PT Serif",
        padding: "20px",
      }}
    >
      <motion.div
        className="row mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="col-md-12">
          <Link to="/projects">
            <IoMdArrowRoundBack style={{ marginTop: "-5px" }} />
          </Link>
          &nbsp;Back
        </h3>
      </motion.div>

      <motion.div
        className="row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="col-md-12 col-lg-6 text-center mb-4"
          style={{ height: "auto" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            src="aboutprem.png"
            alt="portfolio"
            className="img-fluid"
            style={{ height: "50vh",borderRadius:'20px' }}
          />
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-4">Portfolio</h3>
          <h4 className="mt-4">MERN</h4>
          <p style={{ fontFamily: "sans-serif" }}>
            Portfolio website to showcase my skills and projects. The frontend
            is built using React, providing an interactive and responsive user
            experience. The backend is powered by Express, ensuring robust
            server functionality. To manage data efficiently, I utilized MongoDB
            Atlas as my database solution.
          </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="MongoDB.png"
              alt="databse"
              className="tech-icon"
              height={60}
            />
            <img
              src="express.png"
              alt="express"
              className="tech-icon"
              height={60}
            />
            <img
              src="reacticon.png"
              alt="react"
              className="tech-icon"
              height={60}
            />
            <img src="Nodejs.png" alt="js" className="tech-icon" height={60} />
          </div>
          <div className="d-flex flex-wrap mt-4">
            <Link to="https://portfolio-prem-site.vercel.app/">
              <motion.button
                className="btn me-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  color: "white",
                  backgroundColor: "rgba(182, 58, 65, 1)",
                }}
              >
                Demo
              </motion.button>
            </Link>
            <Link to="https://github.com/premkumar1403/Frontend.git">
              <motion.button
                className="btn"
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  color: "white",
                  backgroundColor: "rgba(182, 58, 65, 1)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                GitHub
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ backgroundColor: "gray", marginTop: "5%", marginBottom: "5%" }}
      >
        <div className="col-md-12">
          <h2 className="mb-3">Main Features</h2>
          <h3 className="mb-2">Dynamic Frontend:</h3>
          <h4>
            Built with React, leveraging its component-based architecture to
            create reusable UI elements.Implements features like animations,
            transitions, and state management to enhance user engagement and
            provide a smooth navigation experience.
          </h4>
          <h3 className="mt-3 mb-2">Robust Backend:</h3>
          <h4>
            Express.js for handling server-side logic, routing, and middleware
            functions.Creates RESTful APIs to facilitate communication between
            the frontend and backend, allowing for efficient data retrieval and
            submission.
          </h4>
          <h3 className="mt-3 mb-2">Data Management:</h3>
          <h4>
            Integrates with MongoDB Atlas as a cloud-based database solution for
            scalable and secure data storage.Defines a clear data schema to
            organize and manage user submissions and project information
            effectively.
          </h4>
          <h3 className="mt-3 mb-2">Downloadable Resume:</h3>
          <h4>
            Provides a straightforward download button, allowing users to
            quickly save a copy of your resume for offline viewing. Regularly
            updates the resume file to reflect the most current information and
            skills.
          </h4>
          <h3 className="mt-3 mb-2"> Contact Form:</h3>
          <h4>
            Includes fields for name, email, message, and any other relevant
            details to capture user inquiries effectively. Implements
            client-side validation to ensure all required fields are filled out
            correctly before submission,Automatically stores user submissions in
            MongoDB Atlas for easy access and follow-up,to manage inquiries.
          </h4>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Portfolio;
