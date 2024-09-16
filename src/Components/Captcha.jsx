import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Footer from './Footer';
const Captcha = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgba(16, 15, 55, 1)",
        color: "white",
        fontFamily: "PT Serif",
      }}
    >
      <div className="row">
        <h3 className="col-md-12">
          <Link to="/projects">
            <IoMdArrowRoundBack style={{ marginTop: "-5px" }} />
          </Link>
          &nbsp;Back
        </h3>
      </div>
      <div className="row">
        <div
          className="col-md-6 btn-warning tect-center"
          style={{ height: "350px", width: "500px" }}
        >
          <img src="captcha.png" alt="portfolio" width={450} height={300} />
        </div>
        <div className="col-md-6">
          <h3 className="col-md-12">Captcha Generator</h3>
          <h4 className="col-md-12">Frontend</h4>
          <h5 className="col-md-12">
            Creating a CAPTCHA generator involves producing a system that
            generates text-based CAPTCHAs to distinguish between humans and
            bots.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="Html 5.png" alt="html" />
            <img src="Tailwind CSS.png" alt="tailwind" />
            <img src="JavaScript.png" alt="js" />
          </div>
          <Link to="https://premkumar1403.github.io/captchagenerator.github.io/captcha.html">
            <button className="btn btn-primary col-md-5 text-center">
              Demo
            </button>
          </Link>
          <Link to="https://github.com/premkumar1403/captcha.git">
            <button className="btn btn-primary col-md-5 text-center">
              GitHub
            </button>
          </Link>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "gray",marginTop:"5%",marginBottom:"5%" }}>
        <h2 className="col-md-12">Main Features</h2>
        <h3 className="col-md-12">Randomized Text Generation:</h3>
        <h4 className="col-md-12 text-center">
          Generate a random sequence of character including letter (both upper
          case and lower case) and numbers.
        </h4>
        <h3 className="col-md-12">Length Customization:</h3>
        <h4 className="col-md-12 text-center">
          allow to configure the length of the captcha text.
        </h4>
        <h3 className="col-md-12">Refresh:</h3>
        <h4 className="col-md-12 text-center">
          Allow user to the refresh the captcha to generate a new one.
        </h4>
      </div>
      <Footer/>
    </div>
  );
}

export default Captcha