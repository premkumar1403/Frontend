import React from 'react'
import Header from './Header'
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from './Footer';
const Portfolio = () => {
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
          <img src="skills.png" alt="portfolio" width={450} height={300} />
        </div>
        <div className="col-md-6">
          <h3 className="col-md-12">Portfolio</h3>
          <h4 className="col-md-12">Frontend</h4>
          <h5 className="col-md-12">
            This project is a portfolio website developed using HTML this
            website is designed to showcase the users skills projects and
            services it features a modern and clean design with smooth
            navigation and responsive layout.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="figma.png" alt="figma" />
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
        <h3 className='col-md-12'>Responsive Design:</h3>
        <h4 className='col-md-12 text-center'>
          The website is designed to be responsive,ensuring a seamless
          experience across various devices and screen sizes.
        </h4>
        <h3 className='col-md-12'>Modern UI/UX:</h3>
        <h4 className='col-md-12 text-center'>
          The website is designed to be responsive,ensuring a seamless
          experience across various devices and screen sizes.
        </h4>
          </div>
          <Footer/>
    </div>
  );
}

export default Portfolio