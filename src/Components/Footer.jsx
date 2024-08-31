import React from 'react'

const Footer = () => {
    const year = new Date();
    let data=year.getFullYear()
  return (
    <div>
      <div className="row">
        <h1 className="col-md-12">PREMKUMAR</h1>
        <h4 className="col-md-12">
          I’m web developer and designer based in india. I have a very deep
          passion to design stuff this website is made with the lot of love and
          passion.
        </h4>
        <img src="GitHub.png" alt="github" />
        <img src="LinkedIn.png" alt="linkedin" />
        <img src="insta.png" alt="instagram" />
        <h5>Portfolio v2.0</h5>
        <h4>&copy;{data}</h4>
      </div>
    </div>
  );
}

export default Footer