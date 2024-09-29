import React from 'react'
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "./Footer";
import { motion } from "framer-motion";
const Weatherapp = () => {
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
            src="weatherapp.png"
            alt="portfolio"
            className="img-fluid"
            style={{ borderRadius: "20px" }}
          />
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-2">Weathrer app</h3>
          <h4 className="mt-4">Frontend</h4>
          <p style={{ fontFamily: "sans-serif" }}>
            This project involves the development of a weather application using
            React, integrated with a RapidAPI endpoint for real-time weather
            data. The application features a responsive frontend design,
            ensuring a seamless user experience across various devices. Users
            can easily access current weather conditions, forecasts, and other
            relevant information and visually appealing interface.
          </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="reacticon.png"
              alt="react"
              className="tech-icon"
              height={50}
            />
            <img src="CSS3.png" alt="css" className="tech-icon" height={60} />
          </div>
          <div className="d-flex flex-wrap mt-2">
            <Link to="https://forcast-data.vercel.app/">
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
            <Link to="https://github.com/premkumar1403/Forcast.git">
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
          <h3 className="mt-3 mb-2">Real-Time Weather Data:</h3>
          <h4>
            Access current weather conditions, including temperature, humidity,
            wind speed,sourced from RapidAPI,View daily and hourly forecasts to
            help users plan ahead.
          </h4>
          <h3 className="mb-2">Responsive Design:</h3>
          <h4>
            The website is designed to be responsive, ensuring a seamless
            experience across various devices and screen sizes.
          </h4>
          <h3 className="mt-3 mb-2">Location Search:</h3>
          <h4>
            Easily search for weather information by city name or geographical
            location.Clear messages for invalid locations or connectivity
            issues, enhancing user experience.
          </h4>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Weatherapp