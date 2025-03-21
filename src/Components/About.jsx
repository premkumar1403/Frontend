import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import '../styles/home.css'
const progressData = [
  { label: "HTML, CSS & JavaScript", width: "75%", value: "80%" },
  { label: "React, MongoDB", width: "70%", value: "70%" },
  { label: "UI/UX", width: "70%", value: "70%" },
  { label: "C programming", width: "80%", value: "80%" },
  { label: "WordPress", width: "80%", value: "80%" },
  { label: "Git/GitHub", width: "75%", value: "75%" },
];

const About = () => {
  async function data(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://backend-portfolio-three-gold.vercel.app/resumedata",
        {
          responseType: "blob",
        }
      );

      // Create a URL for the downloaded files
      const url = URL.createObjectURL(new Blob([response.data]));

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "prem_resume.pdf"); // Specify the file name
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  }

  return (
    <motion.div
      className="container"
      style={{
        backgroundColor: "rgba(16, 15, 55, 1)",
        color: "white",
        fontFamily: "PT Serif",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Header />
      <motion.div
        style={{
          borderRadius: "15px",
          backgroundColor: "rgba(182, 58, 65, 1)",
          color: "white",
          marginTop: "3%",
          height: "6vh",
          paddingTop: "1%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="col-md-12 text-center">About</h3>
      </motion.div>
      <motion.div
        style={{ backgroundColor: "rgba(217, 217, 217, 1)", marginTop: "5%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="row">
          <img
            className="offset-2 mt-3 col-8 offset-sm-3 col-sm-6 mt-sm-3 col-md-4 m-md-4 mt-md-5 col-lg-4 mt-lg-4"
            src="premprofile.png"
            alt="premimage"
            style={{ height: "35vh" }}
          />
          <h4
            class="text-center col-sm-12 col-md-7"
            style={{ marginTop: "3%", color: "black", textWrap: "wrap" }}
          >
            Hi I am
            <span
              style={{
                color: "rgba(182, 58, 65, 1)",
                fontWeight: "bolder",
              }}
            >
              &nbsp;PREMKUMAR&nbsp;
            </span>
            currently pursuing a Bachelor of Engineering degree in Computer
            Science at Builders Engineering College. Passion for full-stack
            development, particularly within the MERN stack. Throughout my
            studies, I have worked on various projects in web development,
            honing my skills and expanding my knowledge in this dynamic field. I
            am eager to leverage my technical expertise and creativity to build
            innovative web applications.
            <div class="offset-md-4 col-md-4 mt-3">
              <motion.button
                onClick={data}
                className="btn text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  backgroundColor: "rgba(182, 58, 65, 1)",
                  color: "white",
                  display: "block",
                  margin: "auto",
                }}
              >
                Download Now
              </motion.button>
            </div>
          </h4>
        </div>
      </motion.div>
      <motion.div
        class="row"
        style={{ marginTop: "4%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div 
          className="col-md-8"
          style={{
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "rgba(217, 217, 217, 1)",
            border: "5px double rgba(182, 58, 65, 1)",
          }}
        >
          <img src="figma.png" alt="figma" style={{ height: "5vh" }} />
          <img src="Html 5.png" alt="html" style={{ height: "6vh" }} />
          <img src="Nodejs.png" alt="node" style={{ height: "6vh" }} />
          <img
            src="Tailwind CSS.png"
            alt="tailwind"
            style={{ height: "6vh" }}
          />
          <img src="React Native.png" alt="react" style={{ height: "6vh" }} />
          <img src="MongoDB.png" alt="mongodb" style={{ height: "6vh" }} />
          <img
            src="C Programming.png"
            alt="c language"
            style={{ height: "6vh" }}
          />
        </div>
        <div
          className="mt-3 col-md-4 mt-md-0"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(217, 217, 217, 1)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "5px double rgba(182, 58, 65, 1)",
          }}
        >
          <Link to=" https://www.linkedin.com/in/premkumar-m12/">
            <img src="LinkedIn.png" alt="" style={{ height: "5vh" }} />
          </Link>
          <Link to="https://github.com/premkumar1403?tab=repositories">
            <img src="GitHub.png" alt="" style={{ height: "5vh" }} />
          </Link>
          <Link to="https://www.instagram.com/__prem_005/">
            <img src="insta.png" alt="" style={{ height: "4vh" }} />
          </Link>
        </div>
      </motion.div>
      <motion.div
        class="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          borderRadius: "15px",
          backgroundColor: "rgba(182, 58, 65, 1)",
          color: "white",
          marginTop: "3%",
          height: "6vh",
          paddingTop: "1%",
        }}
      >
        <h3 className="col-md-12 text-center">Education</h3>
      </motion.div>
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="col-5 col-md-5">
          <h3>BE</h3>
          <h4>2021-2025</h4>
          <h4>Bachelor of Engineering</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>CGPA - 7.7</h4>
        </div>
        <div
          className="col-2 col-md-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          ></div>
        </div>
        <div className="col-5 col-md-5 text-center">
          <h4>BUILDERS ENGINEERING COLLEGE</h4>
          <h4>Tiruppur, Tamilnadu</h4>
        </div>
      </motion.div>
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <div className="col-5 col-md-5">
          <h3>HSC</h3>
          <h4>2020-2021</h4>
          <h4>Higher Secondary Certificate</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>Percentage - 90%</h4>
        </div>
        <div className="col-2 col-md-2 text-center">
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          ></div>
        </div>
        <div className="col-5 col-md-5 text-center">
          <h4>GMHSS (Govt Model Hrs School)</h4>
          <h4>Erode, Tamilnadu</h4>
        </div>
      </motion.div>
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <div className="col-5 col-md-5">
          <h3>SSLC</h3>
          <h4>2018-2019</h4>
          <h4>Secondary School Leaving Certificate</h4>
          <h4>Percentage - 89%</h4>
        </div>
        <div className="col-2 col-md-2 text-center">
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          ></div>
        </div>
        <div className="col-5 col-md-5 text-center">
          <h4>GHSS (Govt Hrs School)</h4>
          <h4>Erode, Tamilnadu</h4>
        </div>
      </motion.div>
      <motion.div
        className="row mt-5 g-4 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        {progressData.map((item, index) => (
          <React.Fragment key={index}>
            <h5 className="mt-5 col-12 col-md-12">{item.label}</h5>
            <div className="col-9 offset-md-1 col-md-8">
              <div className="progress text-left">
                <motion.div
                  className="progress-bar"
                  role="progressbar"
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 7, ease: "easeInOut" }}
                  style={{
                    backgroundColor: "rgba(71, 223, 233, 1)",
                    height: "60px",
                  }}
                ></motion.div>
              </div>
            </div>
            <div className="col-2 col-md-2  offset-1" style={{fontWeight:"bold",fontSize:'18px'}}>{item.value}</div>
          </React.Fragment>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default About;
