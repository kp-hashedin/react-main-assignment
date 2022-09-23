import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <span className="title"><Link to="/" style={{ color: "whitesmoke" }}>
          Superhero
        </Link></span>
      <span className="home">
        <Link to="/" style={{ color: "whitesmoke" }}>
          Home
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
