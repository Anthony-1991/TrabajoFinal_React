import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./AboutPage.css";
import imagenAbout from "../../assets/about.jpg";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>

      <div className="card">
        <img
          src={imagenAbout}
          className="card-img-bottom img-fluid"
          alt="imagen"
        />
        <div className="card-body">
          {/* <h3 className="card-title">About</h3> */}
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
