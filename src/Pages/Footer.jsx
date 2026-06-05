import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="container py-5">
      {/* CTA Section */}
      <div
        className="p-4 rounded mb-5"
        style={{ backgroundColor: "#0d1b5e", color: "white" }}
      >
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3>Need more information?</h3>
            <p className="mb-0">
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <button className="btn btn-light">Get Started</button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="row">
        {/* Logo Section */}
        <div className="col-lg-4 mb-4">
         <h2 className="fw-bold" style={{color:'#012970'}}>Design.</h2>
          <p className="text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint elit officia consequat.
          </p>
        </div>

        {/* Links */}
        <div className="col-6 col-md-2">
          <h6>Useful Links</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none">Home</a></li>
            <li><a href="/" className="text-decoration-none">About Us</a></li>
            <li><a href="/" className="text-decoration-none">Services</a></li>
            <li><a href="/" className="text-decoration-none">Terms of service</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2">
          <h6>Our Services</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none">Web Design</a></li>
            <li><a href="/" className="text-decoration-none">Web Devlopment</a></li>
            <li><a href="/" className="text-decoration-none"> Product Manager</a></li>
            <li><a href="/" className="text-decoration-none">Marketing</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2">
          <h6>Team</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none">Team1</a></li>
            <li><a href="/" className="text-decoration-none">Team2</a></li>
            <li><a href="/" className="text-decoration-none">Team3</a></li>
            <li><a href="/" className="text-decoration-none">Team4</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="col-6 col-md-2">
          <h6>Connect with us</h6>

          <div className="d-flex gap-2 mt-3">
            <div className="bg-secondary rounded-circle p-3"><i class="bi bi-twitter-x"></i></div>
            {/* <div className="bg-secondary rounded-circle p-3"><i class="bi bi-facebook"></i></div> */}
            <div className="bg-secondary rounded-circle p-3"><i class="bi bi-instagram"></i></div>
            <div className="bg-secondary rounded-circle p-3"><i class="bi bi-linkedin"></i></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;