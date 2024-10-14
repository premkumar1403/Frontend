import React from "react";
import "../styles/header.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion' 
import '../styles/home.css' 
const Home = () => {
  return (
    <div className="container" id="head">
      <Header />
      <div className="mt-5">
        <div style={{position:'relative'}}>
          <motion.div
            id="overlay"
            className="blinking-text"
            animate={{
              opacity: [0.03, 0.03, 0.03],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
          </motion.div>
          <div style={{position:'absolute',top:"15%"}}
            className="row col-10 text-left col-sm-12 col-md-12 col-lg-5"
            // style={{ position: "absolute", marginTop: "-45%" }}
          >
            <motion.div
              className="position-relative"
              // style={{ top: "-35%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <img src="circle.png" alt="circle" style={{heigth:"10vh",width:"20vw"}} />
            </motion.div>
          </div>
          <div style={{position:'absolute',top:'25%'}}
            className="mt-sm-4 d-lg-flex col-lg-6 align-items-lg-center"
            // style={{ marginTop: "-40%" }}
          >
            <motion.div
              className="col-8 text-center col-sm-12 col-md-12 mb-md-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3 style={{ textDecoration: "underline" }}>Hey I'm</h3>
              <motion.h1
                style={{
                  fontFamily: "Bowlby One SC",
                  fontWeight: "regular",
                  fontSize: "70px",
                  textDecoration: "underline",
                }}
              >
                PREMKUMAR
              </motion.h1>

              <h5 style={{ textDecoration: "underline" }}>
                Currently Studying Computer Science and Engineering
              </h5>
              <img src="GitHub.png" alt="github" />
              <img src="LinkedIn.png" alt="linkedin" />
            </motion.div>
            <motion.div
              className="col-8 offset-2 col-sm-12 offset-sm-5 mt-sm-4 col-md-12 m-lg-1 text-lg-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 3 }}
            >
              <img src="premphoto.png" alt="prem" style={{heigth:"15vh",width:"20vw"}}/>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="row text-center"
          style={{ marginTop: "5%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <h1 className="col-md-12">About</h1>
          <h3 className="col-md-12">
            Hi i am PREMKUMAR , a third year computer science and engineering
            student at builders engineering college with a passion for crafting
            user centeric experiences.....
          </h3>
          <Link to="/about">
            <motion.button
              className="btn offset-md-5 col-md-2 text-center"
              id="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              More..
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          id="project"
          style={{ marginTop: "5%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <h3>Recent Projects</h3>
          <h3>
            See all
            <Link to="/projects">
              <IoIosArrowForward style={{ marginTop: "-2px" }} />
            </Link>
          </h3>
        </motion.div>
        <motion.div
          className="row d-flex justify-content-center"
          style={{ marginTop: "5%", marginBottom: "5%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <motion.div
            className="col-8 mt-5 col-sm-7 col-md-5 col-lg-3 col-xl-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/portfolio">
              <motion.img
                src="project1.png"
                alt="project1"
                style={{ height: "25vh", width: "50vw" }}
                className="img-fluid mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>Portfolio</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="figma.png" alt="figma" />
              <img src="Html 5.png" alt="html" />
              <img src="Tailwind CSS.png" alt="tailwindcss" />
              <img src="JavaScript.png" alt="js" />
            </div>
          </motion.div>
          <motion.div
            className="col-8 mt-5 col-sm-7 col-md-5 offset-md-1 offset-lg-1 col-lg-3 col-xl-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/captcha">
              <motion.img
                src="captcha.png"
                alt="project1"
                style={{ heigth: "25vh", width: "60vw" }}
                className="img-fluid mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>Captcha Generator</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="Html 5.png" alt="html" />
              <img src="CSS3.png" alt="css" />
              <img src="JavaScript.png" alt="js" />
            </div>
          </motion.div>
          <motion.div
            className="col-8 col-sm-7 mt-5 col-md-5 offset-lg-1 col-lg-3 col-xl-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/ecommerce">
              <motion.img
                src="ecommerce.png"
                alt="project1"
                style={{ heigth: "25vh", width: "60vw" }}
                className="img-fluid mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>E-commerce</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="Html 5.png" alt="html" />
              <img src="CSS3.png" alt="css" />
              <img src="JavaScript.png" alt="js" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
