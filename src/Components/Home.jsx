import React from "react";
import "../styles/header.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion'  
const Home = () => {
  return (
    <div className="container" id="head">
      <Header />
      <div className="mt-5">
        <div>
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
          <div
            className="row col-md-4 text-left"
            style={{ marginTop: "-35%", position: "absolute" }}
          >
            <motion.div
              className="position-relative"
              style={{ top: "-35%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <img src="circle.png" alt="circle" height={100} />
            </motion.div>
          </div>
          <div
            className="row d-flex align-items-center"
            style={{ marginTop: "-40%" }}
          >
            <motion.div
              className="col-md-7 text-center"
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
              className="col-md-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 3 }}
            >
              <img src="premphoto.png" alt="prem" />
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
            className="col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/portfolio">
              <motion.img
                src="project1.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
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
            className="offset-1 col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/captcha">
              <motion.img
                src="captcha.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
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
            className="offset-1 col-md-3 offset-1 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/ecommerce">
              <motion.img
                src="ecommerce.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
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
