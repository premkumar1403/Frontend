import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const year = new Date();
    let data=year.getFullYear()
  return (
    <div className="container mt-5" id="head">
      <div className="text-center">
        <h3 style={{ fontFamily: "bowlby One SC" }}>PREMKUMAR</h3>
        <h5>
          I’m web developer and designer based in india. I have a very deep
          passion to design stuff this website is made with the lot of love and
          passion.
        </h5>
        <Link to="https://github.com/premkumar1403?tab=repositories">
          <img src="GitHub.png" alt="github" />
        </Link>
        <Link to="https://www.linkedin.com/in/premkumar-m12/">
          <img src="LinkedIn.png" alt="linkedin" />
        </Link>
        <Link to="https://www.instagram.com/__prem_005/">
          <img src="insta.png" alt="instagram" />
        </Link>
        <h6>Portfolio v2.0</h6>
        <h6>&copy;&nbsp;&nbsp;&nbsp;&nbsp;{data}</h6>
      </div>
    </div>
  );
}

export default Footer