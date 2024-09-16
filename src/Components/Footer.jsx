import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const year = new Date();
    let data=year.getFullYear()
  return (
    <div className="container" id="head">
      <div className="text-center">
        <h1 style={{ fontFamily: "bowlby One SC" }}>PREMKUMAR</h1>
        <h4>
          I’m web developer and designer based in india. I have a very deep
          passion to design stuff this website is made with the lot of love and
          passion.
        </h4>
        <Link to="https://github.com/premkumar1403?tab=repositories">
          <img src="GitHub.png" alt="github" />
        </Link>
        <Link to="https://www.linkedin.com/in/premkumar-m12/">
          <img src="LinkedIn.png" alt="linkedin" />
        </Link>
        <Link to="https://www.instagram.com/__prem_005/">
          <img src="insta.png" alt="instagram" />
        </Link>
        <h5>Portfolio v2.0</h5>
        <h4>&copy;&nbsp;&nbsp;&nbsp;&nbsp;{data}</h4>
      </div>
    </div>
  );
}

export default Footer