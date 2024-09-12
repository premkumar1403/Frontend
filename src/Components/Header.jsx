import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'
const Header = () => {
  return (
    <div className="container" id="head">
      <div className="row text-center">
        <h2 className="col-md-3">
          <Link to="/" style={{ color: "rgba(182, 58, 65, 1)" }}>
            HOME
          </Link>
        </h2>
        <h2 className="col-md-3">
          <Link to="/about">ABOUT</Link>
        </h2>
        <h2 className="col-md-3">
          <Link to="/projects">PROJECTS</Link>
        </h2>
        <h2 className="col-md-3">
          <Link to="/contactus">CONTACTUS</Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
