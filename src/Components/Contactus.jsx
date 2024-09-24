import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { motion } from "framer-motion";
const Contactus = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [issue, setissue] = useState({
    name: "",
    email: "",
    message: "",
  });
  

  const email_regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  async function validate(e) {
    e.preventDefault();
    if (data.name === "") {
      valid = false;
      setissue({ name: "Please provide a valid name" });
    } else if (!email_regx.test(data.email)) {
      valid = false;
      setissue({ email: "Please provide a valid email address" });
    } else if (data.message === "") {
      valid = false;
      setissue({ message: "Please provide your feedback" });
    } else if (valid) {
      setissue({ name: "", email: "", message: "" });
      alert(`${data.name}, thank you for providing feedback 🎉`);
      await axios.post(
        "https://backend-portfolio-three-gold.vercel.app//feedback",
        data
      );
      setdata({ name: "", email: "", message: "" });
    }
  }


 

  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgba(16, 15, 55, 1)",
        fontFamily: "PT Serif",
      }}
    >
      <Header />
      <motion.div
        className="row"
        style={{
          borderRadius: "15px",
          backgroundColor: "rgba(182, 58, 65, 1)",
          color: "white",
          height: "70px",
          marginTop: "5%",
          paddingTop: "1.5%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <h2 className="text-center">Contact Us</h2>
      </motion.div>
      <div
        className="row"
        style={{
          backgroundColor: "#DFE09A",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <h2>Get in Touch</h2>
          <h3>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas.
          </h3>
        </motion.div>
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <form onSubmit={validate}>
            <label htmlFor="name" className="form-label mt-2">
              Name
            </label>
            <input
              id="name"
              className="form-control"
              type="text"
              value={data.name}
              placeholder="Enter your Name"
              onChange={(e) => setdata({ ...data, name: e.target.value })}
            />
            <p className="text-danger" style={{ fontFamily: "sans-serif" }}>
              {issue.name}
            </p>

            <label htmlFor="email" className="form-label mt-3">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="text"
              value={data.email}
              placeholder="Enter your Email"
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
            <p className="text-danger" style={{ fontFamily: "sans-serif" }}>
              {issue.email}
            </p>

            <label htmlFor="message" className="form-label mt-3">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              style={{ height: 200 }}
              value={data.message}
              placeholder="Message Here"
              onChange={(e) => setdata({ ...data, message: e.target.value })}
            ></textarea>
            <p className="text-danger" style={{ fontFamily: "sans-serif" }}>
              {issue.message}
            </p>

            <motion.button
              type="submit"
              className="btn mt-4 mb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: "200px",
                color: "white",
                display: "block",
                margin: "0 auto",
                backgroundColor: "rgba(182, 58, 65, 1)",
              }}
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
