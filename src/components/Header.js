import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light editHeader">
      <div className="container-fluid">
        <Link to="/list" className="btn btn-outline-success">
          LISTADO
        </Link>
        <Link to="/form" className="btn btn-outline-success">
          FORMULARIO
        </Link>
      </div>
    </nav>
  );
};

export default Header;
