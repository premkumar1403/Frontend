import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(16, 15, 55, 1)",color:"white",fontFamily:"PT Serif" }}
    >
      <Header />
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "rgba(182, 58, 65, 1)",
          color: "white",
          marginTop: "3%",
          height: "70px",
          paddingTop: "1.5%",
        }}
      >
        <h3 className="col-md-12 text-center">About</h3>
      </div>
      <div
        style={{ backgroundColor: "rgba(217, 217, 217, 1)", marginTop: "5%" }}
      >
        <div className="row">
          <img
            className="col-md-4"
            src="premprofile.png"
            alt="premimage"
            height={350}
          />
          <h4 className="col-md-8 text-center" style={{ marginTop: "5%" }}>
            Hi i am PREMKUMAR , a third year computer science and engineering
            student at builders engineering college with a passion for crafting
            user centeric experiences.I specialize in UI/UX design,frontend
            development and graphic design width expertise in
            HTML,CSS,JavaScript,React,Node.js,Tailwind and c.
            <button
              className=" btn col-md-6 text-center mt-4 "
              style={{
                backgroundColor: "rgba(182, 58, 65, 1)",
                color: "white",
              }}
            >
              Download Now
            </button>
          </h4>
        </div>
      </div>
      <div className="row" style={{ marginTop: "4%" }}>
        <div
          className="col-md-8 g-2"
          style={{
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "rgba(217, 217, 217, 1)",
          }}
        >
          <img src="figma.png" alt="figma" height={70} />
          <img src="Html 5.png" alt="html" height={70} />
          <img src="Nodejs.png" alt="node" height={70} />
          <img src="Tailwind CSS.png" alt="tailwind" height={70} />
          <img src="React Native.png" alt="react" height={70} />
          <img src="MongoDb.png" alt="mongodb" height={70} />
          <img src="C Programming.png" alt="c language" height={70} />
        </div>
        <div
          className="col-md-4 g-2"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(217, 217, 217, 1)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img src="LinkedIn.png" alt="" height={100} />
          <img src="GitHub.png" alt="" height={100} />
          <img src="insta.png" alt="" height={80} />
        </div>
      </div>
      <div className="row btn-primary" style={{ borderRadius: "15px" }}>
        <h3
          className="col-md-12 text-center"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(182, 58, 65, 1)",
            color: "white",
            marginTop: "3%",
            height: "70px",
            paddingTop: "1.5%",
          }}
        >
          Education
        </h3>
      </div>
      <div className="row mt-5">
        <h3 className="col-md-12 text-left">BE</h3>
        <div className="col-md-5">
          <h4>2021-2025</h4>
          <h4>Bachelor of Engineering</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>CGPA - 7.7</h4>
        </div>
        <div className="col-md-2">
          <div style={{ height: "20px",color:"white" }}></div>
        </div>
        <div className="col-md-5 text-center">
          <h4>BUILDERS ENGINEERING COLLEGE</h4>
          <h4>Tiruppur, Tamilnadu</h4>
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="col-md-12 text-left">HSC</h3>
        <div className="col-md-5">
          <h4>2020-2021</h4>
          <h4>Higher Seconday Certificate</h4>
          <h4>Computer Science and Engineering</h4>
          <h4>Percentage - 90%</h4>
        </div>
        <div className="col-md-2">
          <div style={{ height: "10px", width: "20px" }}></div>
        </div>
        <div className="col-md-5 text-center">
          <h4>GMHSS (Govt Model Hrs School)</h4>
          <h4>Erode, Tamilnadu</h4>
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="col-md-12 text-left">SSLC</h3>
        <div className="col-md-5">
          <h4>2018 - 2019</h4>
          <h4>Secondary School Leaving Certificate</h4>
          <h4>Percentage - 89%</h4>
        </div>
        <div className="col-md-2">
          <div style={{ height: "10px", width: "20px" }}></div>
        </div>
        <div className="col-md-5 text-center">
          <h4>GHSS (Govt Hrs School)</h4>
          <h4>Erode, Tamilnadu</h4>
        </div>
      </div>
      <div className="row mt-5 g-4 mb-5">
        <h5 className="col-md-3">HTML,CSS&JavaScript</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "75%",
                ariaValuenow: "75",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-2 offset-1">80%</div>
        <h5 className="col-md-3">React,MongoDB</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                ariaValuenow: "70",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-2 offset-1">70%</div>
        <h5 className="col-md-3">UI/UX</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                ariaValuenow: "70",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-2 offset-1">70%</div>
        <h5 className="col-md-3">C programming</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "80%",
                ariaValuenow: "80",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-2 offset-1">80%</div>
        <h5 className="col-md-3">Wordpress</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "80%",
                ariaValuenow: "80",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>

        <div className="col-md-2 offset-1">80%</div>
        <h5 className="col-md-3">Git/GitHub</h5>
        <div className="col-md-6">
          <div class="progress text-left">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "75%",
                ariaValuenow: "75",
                ariaValuemin: "0",
                ariaValuemax: "100",
                backgroundColor: "rgba(71, 223, 233, 1)",
              }}
            ></div>
          </div>
        </div>
       <div className="col-md-2 offset-1">75%</div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
