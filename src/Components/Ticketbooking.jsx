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
          <img src="ticket.png" alt="ecommerce" className="img-fluid" style={{height:'50vh',width:"50vw"}}/>
        </motion.div>
        <motion.div
          className="col-md-12 col-lg-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="mt-4">Ticket Booking App Design</h3>
          <h4 className="mt-4">UI / UX</h4>
          <p style={{ fontFamily: "sans-serif" }}>
                 Ticket booking applicaton UI / UX design aims to provide a seamless
            and intutive experience for users to book tickets.this design is
            responsive works well on various devices.   </p>
          <h3 className="mt-4">Techskills</h3>
          <div className="d-flex flex-wrap mt-4 ">
            <img
              src="figma.png"
              alt="figma"
              className="tech-icon"
              height={60}
            />
            </div>
          <div className="d-flex flex-wrap mt-4">
            <Link to="https://www.figma.com/design/S7AScPafTpUEbsuvzbOuno/Portfolio?node-id=0-1&t=X3TWPfMIu6XJVZNJ-1">
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
          <h3 className="mb-2">Clear layout:</h3>
          <h4>
            Organize elements in a way that guides the user’s eye and indicate
          importance.
          </h4>
          <h3 className="mt-3 mb-2">Search Functionality:</h3>
          <h4> Search bar with auto complete suggessions.
                      </h4>
            
          <h3 className="mt-3 mb-2">Consistent Typography:</h3>
          <h4> Use font styles sizes and weights to establish a hierarchy of
          information. Color palatte typography and imagenery to create an
          engaging interface.</h4>

          <h3 className="mt-3 mb-2">User centered design :</h3>
          <h4>Conduct research to understand user needs behaviour and pain points.</h4>

        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Portfolio;
