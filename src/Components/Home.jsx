import React from "react";
import '../styles/header.css'
import Header from "./Header";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
  return (
    <div className="container" id="head">
      <Header/>
      <div className="mt-5"> 
        <div>
          <div id="overlay">
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
            <p>WORDPRESS</p>
            <p>FIGMA</p>
            <p>JAVA SCRIPT</p>
            <p>MONGODB</p>
          </div>
          <div
            className="row col-md-4 text-left"
            style={{ marginTop: "-35%", position: "absolute" }}
          >
            <img src="circle.png" alt="circle" height={100} />
          </div>
          <div
            className="row d-flex align-items-center"
            style={{ marginTop: "-40%" }}
          >
            <div className="col-md-7 text-center">
              <h3 style={{ textDecoration: "underline" }}>Hey I'm</h3>
              <h1
                style={{
                  fontFamily: "Bowlby One SC",
                  fontWeight: "regular",
                  fontSize: "70px",
                  textDecoration: "underline",
                }}
              >
                PREMKUMAR
              </h1>
              <h5 style={{ textDecoration: "underline" }}>
                Currently Studying Computer Science and Engineering
              </h5>
              <img src="GitHub.png" alt="github" />
              <img src="LinkedIn.png" alt="linkedin" />
            </div>
            <div className="col-md-5">
              <img src="premphoto.png" alt="prem" />
            </div>
          </div>
        </div>
        <div className="row text-center" style={{ marginTop: "5%" }}>
          <h1 className="col-md-12">About</h1>
          <h3 className="col-md-12">
            Hi i am PREMKUMAR , a third year computer science and engineering
            student at builders engineering college with a passion for crafting
            user centeric experiences.....
          </h3>
          <button className="btn offset-md-5 col-md-1 text-center" id="button">
            More..
          </button>
        </div>
        <div id="project" style={{ marginTop: "5%" }}>
          <h3>Recent Projects</h3>
          <h3>
            See all <IoIosArrowForward style={{ marginTop: "-2px" }} />
          </h3>
        </div>
        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          <div className="col-md-3 text-center" id="lists">
            <img src="project1.png" alt="project1" height={300} width={300} />
            <h3>Portfolio</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="figma.png" alt="figma" />
              <img src="Html 5.png" alt="html" />
              <img src="Tailwind CSS.png" alt="tailwindcss" />
              <img src="javaScript.png" alt="js" />
            </div>
          </div>
          <div className="offset-1 col-md-3 text-center" id="lists">
            <img src="captcha.png" alt="project1" height={300} width={300} />
            <h3>Captcha Generator</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="Html 5.png" alt="html" />
              <img src="CSS3.png" alt="css" />
              <img src="javaScript.png" alt="js" />
            </div>
          </div>
          <div className="offset-1 col-md-3 offset-1 text-center" id="lists">
            <img src="ecommerce.png" alt="project1" height={300} width={300} />
            <h3>E-commerce</h3>
            <h3>Frontend</h3>
            <div className="col-md-12">
              <img src="Html 5.png" alt="html" />
              <img src="CSS3.png" alt="css" />
              <img src="javaScript.png" alt="js" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
