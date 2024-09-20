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
          <img src="filesharing.png" alt="filesharing" className="img-fluid" style={{heigth:"50vh",width:"50vw"}}/>
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-4">File Sharing Website</h3>
          <h4 className="mt-4">Project Send</h4>
          <p style={{ fontFamily: "sans-serif" }}>
                This a platform to upload store and share files securely and
            efficiently.Whether it’s for personal use sharing files with
            colleagues or clients. </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="projectsend.png"
              alt="projectsend"
              className="tech-icon"
              height={60}
            />
            </div>
          <div className="d-flex flex-wrap mt-4">
            <Link to="https://docs.projectsend.org/about">
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
          <h3 className="mb-2">Registration and Authentication:</h3>
          <h4>
            Organize elements in a way that guides the user’s eye and indicate
          importance.
          </h4>
          <h3 className="mt-3 mb-2">Search Functionality:</h3>
          <h4>  Allows users to create accounts and login securely.
                      </h4>
            
          <h3 className="mt-3 mb-2">File upload and storage:</h3>
          <h4>Enable users to upload files of various types and maximum 2 GB of
          data.</h4>

          <h3 className="mt-3 mb-2">File sharing:</h3>
          <h4>Users to share files and folders with direct link. Providing options
          for setting permissions on shared files.</h4>

         <h3 className="mt-3 mb-2">Search and Filter:</h3>
          <h4>Search functionality to help users quickly find files and folders.
          Provide filtering options based on file type,date,size and other
          attributes.</h4>


        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Portfolio;
