import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
const Contactus = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [issue, setissue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const email_regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  async function validate(e) {
    e.preventDefault();
    if (data.name === "") {
      valid = false;
      setissue({ name: "please provide valid name" });
    } else if (!email_regx.test(data.email)) {
      valid = false;
      setissue({ email: "please provide valid email addreess" });
    } else if (data.message === "") {
      valid = false;
      setissue({ message: "please give your feedback" });
    } else if (valid) {
      setissue({ name: "", email: "", message: "" });
      alert(`${data.name} Thank you providing feedback 🎉`);
      await axios.post(
        "https://backend-portfolio-peach.vercel.app/feedback",
        data
      );
      setdata({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="container">
      <Header />
      <div className="row btn-info">
        <h2 className="text-center">Contact us</h2>
      </div>
      <div className="row" style={{ backgroundColor: "#DFE09A" }}>
        <div className="col-md-6">
          <h2 className="col-md-12">Get in Touch</h2>
          <h3 className="col-md-12">
            if you are interested in my work or want to provide feedback about
            this website,i am open to exchanging ideas.
          </h3>
        </div>
        <div className="col-md-6">
          <div className="row">
            <form onSubmit={validate}>
              <label htmlFor="name" className="col-md-12 mt-2">
                Name
              </label>
              <input
                id="name"
                className="col-md-8"
                type="text"
                value={data.name}
                placeholder="Enter your Name"
                onChange={(e) => setdata({ ...data, name: e.target.value })}
              />
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  position: "fixed",
                }}
              >
                {issue.name}
              </p>
              <label htmlFor="email" className="col-md-12 mt-3">
                Email
              </label>
              <input
                id="email"
                className="col-md-8"
                type="text"
                value={data.email}
                placeholder="Enter your Email"
                onChange={(e) => setdata({ ...data, email: e.target.value })}
              />
              <p
                style={{
                  color: "red",
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  position: "fixed",
                }}
              >
                {issue.email}
              </p>
              <label htmlFor="message" className="col-md-12 mt-3">
                Message
              </label>
              <textarea
                id="message"
                style={{ height: 200 }}
                className="col-md-8"
                value={data.message}
                placeholder="Message Here"
                onChange={(e) => setdata({ ...data, message: e.target.value })}
              ></textarea>
              <p
                style={{
                  color: "red",
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  position: "fixed",
                }}
              >
                {issue.message}
              </p>
              <button className="offset-md-3 col-md-3 mt-4 text-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
