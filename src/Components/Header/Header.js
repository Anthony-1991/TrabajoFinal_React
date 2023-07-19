import React from "react";
import "./Header.css";

import Img from "../../assets/portada.jpg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="HeaderImg">
      <div>
        <Link to="/">
          <img src={Img} alt="portada" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
