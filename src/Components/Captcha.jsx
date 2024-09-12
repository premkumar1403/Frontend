import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { IoMdArrowRoundBack } from 'react-icons/io';
const Captcha = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <h3 className="col-md-12">
          <IoMdArrowRoundBack />
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
          <button className="btn btn-primary col-md-5 text-center">Demo</button>
          <button className="btn btn-primary col-md-5 text-center">
            GitHub
          </button>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "gray" }}>
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
      <Footer />
    </div>
  );
}

export default Captcha