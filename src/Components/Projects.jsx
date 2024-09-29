import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgba(16, 15, 55, 1)",
      }}
    >
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, type: "spring" }}
      >
        <div
          className="row d-flex justify-content-center flex-wrap"
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <motion.div
            className="col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/portfolio">
              <motion.img
                src="/project1.png"
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
            <h3>MERN</h3>
            <div className="col-md-12">
              <img src="MongoDB.png" alt="mongodb" height={50} width={40} />
              <img src="express.png" alt="express" height={40} width={40} />
              <img
                src="React Native.png"
                alt="tailwindcss"
                height={45}
                width={40}
              />
              <img src="Nodejs.png" alt="js" height={50} width={50} />
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
        </div>
        <div
          className="row d-flex justify-content-center flex-wrap"
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <motion.div
            className="col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/ticketbooking">
              <motion.img
                src="ticketbooking.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>Ticket Booking</h3>
            <h3>UI / UX</h3>
            <div className="col-md-12">
              <img src="figma.png" alt="figma" />
            </div>
          </motion.div>
          <motion.div
            className="offset-1 col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/projectsend">
              <motion.img
                src="filesharing.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>File Sharing Website</h3>
            <h3>ProjectSend</h3>
            <div className="col-md-12">
              <img src="projectsend.png" alt="html" />
            </div>
          </motion.div>
          <motion.div
            className="offset-1 col-md-3 offset-1 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/foodblog">
              <motion.img
                src="foodblog.png"
                alt="project1"
                height={300}
                width={300}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>Food Blog</h3>
            <h3>Wordpress</h3>
            <div className="col-md-12">
              <img src="WordPress.png" alt="html" />
            </div>
          </motion.div>
        </div>
        <div
          className="row d-flex justify-content-center flex-wrap "
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <motion.div
            className="col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/weatherapp">
              <motion.img
                src="/weatherapp.png"
                alt="weatherapp"
                style={{ height: "280px", borderRadius: "20px" }}
                width={300}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>Weatherapp</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="React Native.png" alt="react" height={60} />
              <img src="CSS3.png" alt="css" />
            </div>
          </motion.div>
          <motion.div
            className="offset-1 col-md-3 text-center"
            id="lists"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/xoxgame">
              <motion.img
                src="xox.png"
                alt="xox game"
                height={300}
                width={300}
                style={{ borderRadius: "20px" }}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>XOX Game</h3>
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
                src="appstore.png"
                alt="appstore"
                style={{height:"33vh",width:"auto",borderRadius:"20px"}}
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <h3>App Store</h3>
            <h3>MERN</h3>
            <div className="col-md-12">
              <img src="MongoDB.png" alt="mongodb" height={50} width={40} />
              <img src="express.png" alt="express" height={40} width={40} />
              <img
                src="React Native.png"
                alt="reactjs"
                height={45}
                width={40}
              />
              <img src="Nodejs.png" alt="nodejs" height={50} width={40} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Projects;
