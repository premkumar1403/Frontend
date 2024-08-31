import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="row btn-danger text-left">
        <img src="circle.png" alt="circle" />
      </div>
      <div className="row">
        <div className="col-md-7 border-right border-primary">
          <h3>Hey I'm</h3>
          <h1>PREMKUMAR</h1>
          <h5>Currently Studying Computer Science and Engineering</h5>
          <img src="GitHub.png" alt="github" />
          <img src="LinkedIn.png" alt="" />
        </div>
        <div className="col-md-5">
          <img src="premphoto.png" alt="prem" />
        </div>
      </div>
      <div className="row">
        <h1 className="col-md-12">About</h1>
        <h3 className="col-md-12">
          Hi i am PREMKUMAR , a third year computer science and engineering
          student at builders engineering college with a passion for crafting
          user centeric experiences.....
        </h3>
        <button className="btn btn-success">More..</button>
      </div>
      <div className="row btn-warning align-items-center">
        <h3 className="col-md-6 text-left">Recent Projects</h3>
        <h3 className="col-md-6 text-right">See all</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src="project1.png" alt="project1" />
          <h3 className="border border-success">Portfolio</h3>
          <h3>Frontend</h3>
          <div className="row">
            <img src="figma.png" alt="figma" />
            <img src="Html 5.png" alt="html" />
            <img src="Tailwind CSS.png" alt="tailwindcss" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
        <div className="col-md-4 border border-success">
          <img src="captcha.png" alt="project1" />
          <h3>Captcha Generator</h3>
          <h3>Frontend</h3>
          <div className="row">
            <img src="Html 5.png" alt="html" />
            <img src="CSS3.png" alt="css" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
        <div className="col-md-4 border border-success">
          <img src="ecommerce.png" alt="project1" />
          <h3>E-commerce</h3>
          <h3>Frontend</h3>
          <div className="row">
            <img src="Html 5.png" alt="html" />
            <img src="CSS3.png" alt="css" />
            <img src="javaScript.png" alt="js" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home