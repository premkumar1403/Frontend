import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Footer from './Footer';
const Ticketbooking = () => {
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
          <img src="ticket.png" alt="portfolio" width={450} height={300} />
        </div>
        <div className="col-md-6">
          <h3 className="col-md-12">Ticket Booking App Design</h3>
          <h4 className="col-md-12">UI / UX</h4>
          <h5 className="col-md-12">
            Ticket booking applicaton UI / UX design aims to provide a seamless
            and intutive experience for users to book tickets.this design is
            responsive works well on various devices.
          </h5>
          <h3 className="col-md-12">Techskills</h3>
          <div className="col-md-12">
            <img src="figma.png" alt="figma" />
          </div>
          <Link to="https://www.figma.com/design/S7AScPafTpUEbsuvzbOuno/Portfolio?node-id=0-1&t=X3TWPfMIu6XJVZNJ-1">
            <button className="btn btn-primary col-md-5 text-center">
              Demo
            </button>
          </Link>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "gray",marginTop:"5%",marginBottom:"5%"}}>
        <h2 className="col-md-12">Main Features</h2>
        <h3 className="col-md-12">Clear layout:</h3>
        <h4 className="col-md-12 text-center">
          Organize elements in a way that guides the user’s eye and indicate
          importance.
        </h4>
        <h3 className="col-md-12">Consistent Typography:</h3>
        <h4 className="col-md-12 text-center">
          Use font styles sizes and weights to establish a hierarchy of
          information. Color palatte typography and imagenery to create an
          engaging interface.
        </h4>
        <h3 className="col-md-12">User centered design :</h3>
        <h4 className="col-md-12 text-center">
          Conduct research to understand user needs behaviour and pain points.
        </h4>
      </div>
      <Footer />
    </div>
  );
}

export default Ticketbooking