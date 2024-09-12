import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { IoMdArrowRoundBack } from 'react-icons/io';
const Ecommerce = () => {
  return (
    <div className='container'>
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
          <img src="ecommerce.png" alt="portfolio" width={450} height={300} />
        </div>
        <div className="col-md-6">
          <h3 className="col-md-12">E-Commerce</h3>
          <h4 className="col-md-12">Frontend</h4>
          <h5 className="col-md-12">
            The E-commerce frontend design aims to provide a seamless and
            engaging shopping experience for users.variety of components and
            features that enables users to browse and search products
            effortlessly.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="Html 5.png" alt="html" />
            <img src="CSS3.png" alt="css3" />
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
        <h3 className="col-md-12">Responsiveness:</h3>
        <h4 className="col-md-12 text-center">
          Flexible grid layouts to adopt to different screen sizes.
        </h4>
        <h3 className="col-md-12">Search Functionality:</h3>
        <h4 className="col-md-12 text-center">
          Search bar with auto complete suggessions.
        </h4>
        <h3 className="col-md-12">Navigation:</h3>
        <h4 className="col-md-12 text-center">
          Sidebar navigation for easy access to different product categories and
          filters.
        </h4>
      </div>
      <Footer />
    </div>
  );
}

export default Ecommerce