import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from 'axios'
const progressData = [
  { label: "HTML, CSS & JavaScript", width: "75%", value: "80%" },
  { label: "React, MongoDB", width: "70%", value: "70%" },
  { label: "UI/UX", width: "70%", value: "70%" },
  { label: "C programming", width: "80%", value: "80%" },
  { label: "WordPress", width: "80%", value: "80%" },
  { label: "Git/GitHub", width: "75%", value: "75%" },
];

const About = () => {
  async function download() {
    await axios.get("https://backend-portfolio-peach.vercel.app/download")
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
          height: "70px",
          paddingTop: "1.5%",
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
            className="col-md-4"
            src="premprofile.png"
            alt="premimage"
            height={350}
          />
          <h4
            className="col-md-8 text-center"
            style={{ marginTop: "5%", color: "black" }}
          >
            Hi I am{" "}
            <span
              style={{ color: "rgba(182, 58, 65, 1)", fontWeight: "bolder" }}
            >
              PREMKUMAR
            </span>
            , a third year computer science and engineering student at Builders
            Engineering College with a passion for crafting user-centric
            experiences. I specialize in UI/UX design, front-end development,
            and graphic design with expertise in HTML, CSS, JavaScript, React,
            Node.js, Tailwind, and C.
            <motion.button
              className="btn col-md-6 text-center mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                backgroundColor: "rgba(182, 58, 65, 1)",
                color: "white",
              }}
              onClick={download}
            >
              Download Now
            </motion.button>
          </h4>
        </div>
      </motion.div>
      <motion.div
        className="row"
        style={{ marginTop: "4%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div
          className="col-md-8 g-2"
          style={{
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "rgba(217, 217, 217, 1)",
          }}
        >
          <img src="figma.png" alt="figma" height={70} />
          <img src="Html 5.png" alt="html" height={70} />
          <img src="Nodejs.png" alt="node" height={70} />
          <img src="Tailwind CSS.png" alt="tailwind" height={70} />
          <img src="React Native.png" alt="react" height={70} />
          <img src="MongoDb.png" alt="mongodb" height={70} />
          <img src="C Programming.png" alt="c language" height={70} />
        </div>
        <div
          className="col-md-4 g-2"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(217, 217, 217, 1)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="https://www.instagram.com/__prem_005/">
            <img src="LinkedIn.png" alt="" height={100} />
          </Link>
          <Link to="https://github.com/premkumar1403?tab=repositories">
            <img src="GitHub.png" alt="" height={100} />
          </Link>
          <Link to="https://www.linkedin.com/in/premkumar-m12/">
            <img src="insta.png" alt="" height={80} />
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="row"
        style={{ borderRadius: "15px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <h3
          className="col-md-12 text-center"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(182, 58, 65, 1)",
            color: "white",
            marginTop: "3%",
            height: "70px",
            paddingTop: "1.5%",
          }}
        >
          Education
        </h3>
      </motion.div>
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="col-md-5">
          <h3>BE</h3>
          <h4>2021-2025</h4>
          <h4>Bachelor of Engineering</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>CGPA - 7.7</h4>
        </div>
        <div
          className="col-md-2 text-center"
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
        <div className="col-md-5 text-center">
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
        <div className="col-md-5">
          <h3>HSC</h3>
          <h4>2020-2021</h4>
          <h4>Higher Secondary Certificate</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>Percentage - 90%</h4>
        </div>
        <div className="col-md-2 text-center">
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          ></div>
        </div>
        <div className="col-md-5 text-center">
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
        <div className="col-md-5">
          <h3>SSLC</h3>
          <h4>2018-2019</h4>
          <h4>Secondary School Leaving Certificate</h4>
          <h4>Percentage - 89%</h4>
        </div>
        <div className="col-md-2 text-center">
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          ></div>
        </div>
        <div className="col-md-5 text-center">
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
            <h5 className="col-md-3">{item.label}</h5>
            <div className="col-md-6">
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
            <div className="col-md-2 offset-1">{item.value}</div>
          </React.Fragment>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default About;
