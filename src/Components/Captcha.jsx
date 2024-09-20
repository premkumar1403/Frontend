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
          className="col-md-12 col-lg-6 text-center mb-3"
          style={{ height: "auto" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src="captcha.png" alt="captcha" className="img-fluid" style={{height:"50vh",width:"50vw"}}   />
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-4">Captcha Generator</h3>
          <h4 className="mt-4">Frontend</h4>
          <p style={{ fontFamily: "sans-serif" }}>
            Creating a CAPTCHA generator involves producing a system that
            generates text-based CAPTCHAs to distinguish between humans and
            bots.
          </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="Html 5.png"
              alt="html"
              className="tech-icon"
              height={55}
            />

            <img
              src="Tailwind CSS.png"
              alt="tailwind"
              className="tech-icon"
              height={60}
            />
            <img
              src="JavaScript.png"
              alt="js"
              className="tech-icon"
              height={60}
            />
          </div>
          <div className="d-flex flex-wrap mt-4">
            <Link to="https://premkumar1403.github.io/captchagenerator.github.io/captcha.html">
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
            <Link to="https://github.com/premkumar1403/captcha.git">
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
          <h3 className="mb-2">Randomized Text Generation:</h3>
          <h4>
            Generate a random sequence of character including letter (both upper
            case and lower case) and numbers.
          </h4>
          <h3 className="mt-3 mb-2">Length Customization:</h3>
          <h4>allow to configure the length of the captcha text.</h4>
          <h3 className="mt-3 mb-2">Refresh:</h3>
          <h4>Allow user to the refresh the captcha to generate a new one.</h4>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Portfolio;
