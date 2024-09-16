import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Footer from './Footer';
const Foodblog = () => {
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
            <IoMdArrowRoundBack style={{marginTop: "-5px" }} />
          </Link>
          &nbsp;Back
        </h3>
      </div>
      <div className="row">
        <div
          className="col-md-6 btn-warning tect-center"
          style={{ height: "350px", width: "500px" }}
        >
          <img src="foodblog.png" alt="portfolio" width={450} height={300} />
        </div>
        <div className="col-md-6">
          <h3 className="col-md-12">Food Blog </h3>
          <h4 className="col-md-12">Wordpress</h4>
          <h5 className="col-md-12">
            It’s a place to where visitors can discover new dishes learn cooking
            techniques and find impression for other next meal.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="WordPress.png" alt="wordpress" />
          </div>
          <Link to="https://wordpress.org/">
            <button className="btn btn-primary col-md-5 text-center">
              Refference
            </button>
          </Link>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "gray" ,marginTop:'5%',marginBottom:"5%"}}>
        <h2 className="col-md-12">Main Features</h2>
        <h3 className="col-md-12">Customizable Theme:</h3>
        <h4 className="col-md-12 text-center">
          Visually appealing and responsive word press theme that suits the
          style and tone of food blog.
        </h4>
        <h3 className="col-md-12">Recipe post:</h3>
        <h4 className="col-md-12 text-center">
          Recipe post with detailed instructions,ingredients list,cooking tips
          and high quality images.
        </h4>
        <h3 className="col-md-12">Cooking Tips and Techniques :</h3>
        <h4 className="col-md-12 text-center">
          Includes instructional videos step-by step tutorials and infographics
          to demonstrate cooking methods effectively.
        </h4>
        <h3 className="col-md-12">News Letter Signup:</h3>
        <h4 className="col-md-12 text-center">
          Send regular news letters with curated content exclusive recipes and
          special offers to the subscribers.
        </h4>
        <h3 className="col-md-12">Social Media Integration:</h3>
        <h4 className="col-md-12 text-center">
          Integrate social media,sharing buttons and widgets to allow readers to
          easily share blog post and recipes on their social networks.
        </h4>
      </div>
      <Footer />
    </div>
  );
}

export default Foodblog