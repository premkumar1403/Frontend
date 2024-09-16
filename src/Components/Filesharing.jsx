import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Footer from './Footer';
const Filesharing = () => {
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
          <h3 className="col-md-12">File Sharing Website</h3>
          <h4 className="col-md-12">Project Send</h4>
          <h5 className="col-md-12">
            This a platform to upload store and share files securely and
            efficiently.Whether it’s for personal use sharing files with
            colleagues or clients.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="projectsend.png" alt="projectsend" />
          </div>
          <Link to="https://docs.projectsend.org/about">
            <button className="btn btn-primary col-md-5 text-center">
              Refference
            </button>
          </Link>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "gray",marginTop:'5%',marginBottom:"5%"}}>
        <h2 className="col-md-12">Main Features</h2>
        <h3 className="col-md-12">Registration and Authentication:</h3>
        <h4 className="col-md-12 text-center">
          Allows users to create accounts and login securely.
        </h4>
        <h3 className="col-md-12">File upload and storage:</h3>
        <h4 className="col-md-12 text-center">
          Enable users to upload files of various types and maximum 2 GB of
          data.
        </h4>
        <h3 className="col-md-12">File sharing:</h3>
        <h4 className="col-md-12 text-center">
          Users to share files and folders with direct link. Providing options
          for setting permissions on shared files.
        </h4>
        <h3 className="col-md-12">Search and Filter:</h3>
        <h4 className="col-md-12 text-center">
          Search functionality to help users quickly find files and folders.
          Provide filtering options based on file type,date,size and other
          attributes.
        </h4>
      </div>
      <Footer/>
    </div>
  );
}

export default Filesharing