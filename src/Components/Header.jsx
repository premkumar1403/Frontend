import React from "react";
const Header = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <h2 className="col-md-3 " style={{ color: "#BF7379" }}>
          HOME
        </h2>
        <h2 className="col-md-3">ABOUT</h2>
        <h2 className="col-md-3">PROJECTS</h2>
        <h2 className="col-md-3">CONTACT US</h2>
      </div>
    </div>
  );
};

export default Header;
