import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  function showitem() {
    
  }
  return (
    <div className="container" id="head">
      <div className="row text-center">
        <motion.h2
          className="col-md-3 mt-3"
          initial={{ color: "white" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Link to="/">HOME</Link>
        </motion.h2>
        <motion.h2
          className="col-md-2 mt-3"
          initial={{ color: "white" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Link to="/about">ABOUT</Link>
        </motion.h2>
        <motion.h2
          className="col-md-3 mt-3"
          initial={{ color: "white" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Link to="/projects">PROJECTS</Link>
        </motion.h2>
        <motion.h2
          className="col-md-3 mt-3"
          initial={{ color: "white" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Link to="/contactus">CONTACTUS</Link>
        </motion.h2>
        <motion.h2
          className="col-md-1 mt-3"
          initial={{ color: "white" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Link to="/">
            <CiMenuBurger onClick={showitem} style={{display:"none"}}/>
          </Link>
        </motion.h2>
      </div>

      <div>
        <div
          class="display_navbar"
          style={{
            height: "100vh",
            width: "30vw",
            backgroundColor: "gray",
            display: "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
