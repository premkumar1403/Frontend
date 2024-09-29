import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "./Footer";
import { motion } from "framer-motion";
const Appstore = () => {
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
            src="appstore.png"
            alt="appstore"
            className="img-fluid"
            style={{ height: "55vh" }}
          />
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-2">App Store</h3>
          <h4 className="mt-4">MERN</h4>
          <p style={{ fontFamily: "sans-serif" }}>
            This project involves the development of an app store application
            featuring robust search and category functionalities. Built using
            React for the frontend, along with MongoDB and Express for the
            backend, the application allows users to efficiently search for and
            browse applications based on their preferences. A dedicated server
            facilitates seamless communication between the client and the
            database, ensuring quick access to relevant app data. The intuitive
            design enhances the user experience, making it easy to discover and
            explore various applications.
          </p>
          <h3 className="mt-2">Techskills</h3>
          <div className="d-flex flex-wrap mt-4">
            <img
              src="reacticon.png"
              alt="react"
              className="tech-icon"
              height={50}
            />
            <img
              src="express.png"
              alt="ecpress"
              className="tech-icon"
              height={50}
            />
            <img src="MongoDB.png" alt="DB" className="tech-icon" height={50} />
            <img
              src="Nodejs.png"
              alt="node"
              className="tech-icon"
              height={60}
            />
          </div>
          <div className="d-flex flex-wrap mt-2">
            <Link to="https://frontend-appstore.vercel.app/">
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
            <Link to="https://github.com/premkumar1403/Frontend-appstore.git">
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
          <h3 className="mt-3 mb-2">Search Functionality: </h3>
          <h4>
            Users can easily search for apps by keywords, making it simple to
            find specific applications.
          </h4>
          <h3 className="mb-2">Category Browsing:</h3>
          <h4>
            Explore apps organized by categories, allowing users to discover new
            applications based on their interests.
          </h4>
          <h3 className="mt-3 mb-2">Dynamic Data Retrieval: </h3>
          <h4>
            A dedicated server built with Express enables efficient
            communication with the MongoDB database for real-time app data
            retrieval.
          </h4>
          <h3 className="mt-3 mb-2">Responsive Design:</h3>
          <h4>
            Optimized for various devices, ensuring a seamless experience on
            desktops, tablets, and smartphones.
          </h4>
          <h3 className="mt-3 mb-2">User-Friendly Interface:</h3>
          <h4>
            An intuitive and visually appealing design that enhances the overall
            user experience.
          </h4>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Appstore;
