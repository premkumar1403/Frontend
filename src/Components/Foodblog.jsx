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
            src="foodblog.png"
            alt="filesharing"
            className="img-fluid"
            style={{ heigth: "30vh", width: "30vw" }}
          />
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-4">Food Blog</h3>
          <h4 className="mt-4">Wordpress</h4>
          <p style={{ fontFamily: "sans-serif" }}>
            It’s a place to where visitors can discover new dishes learn cooking
            techniques and find impression for other next meal.{" "}
          </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="wordpress.png"
              alt="projectsend"
              className="tech-icon"
              height={60}
            />
          </div>
          <div className="d-flex flex-wrap mt-4">
            <Link to="https://wordpress.org/">
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
          <h3 className="mb-2">Customizable Theme:</h3>
          <h4>
            Visually appealing and responsive word press theme that suits the
            style and tone of food blog.
          </h4>
          <h3 className="mt-3 mb-2">Recipe post:</h3>
          <h4>
            {" "}
            Recipe post with detailed instructions,ingredients list,cooking tips
            and high quality images.
          </h4>

          <h3 className="mt-3 mb-2">Cooking Tips and Techniques :</h3>
          <h4>
            {" "}
            Includes instructional videos step-by step tutorials and
            infographics to demonstrate cooking methods effectively.
          </h4>

          <h3 className="mt-3 mb-2">News Letter Signup:</h3>
          <h4>
            Send regular news letters with curated content exclusive recipes and
            special offers to the subscribers.
          </h4>

          <h3 className="mt-3 mb-2">Social Media Integration:</h3>
          <h4>
            {" "}
            Integrate social media,sharing buttons and widgets to allow readers
            to easily share blog post and recipes on their social networks.
          </h4>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Portfolio;
