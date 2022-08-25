import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="btn btn-outline-success">
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/users" className="nav-link active" aria-current="page">
                USUARIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link active"
                aria-current="page"
              >
                PRODUCTOS
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/perros">
                    Perros
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos">
                    Gatos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/peces">
                    Peces
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/aves">
                    Aves
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" action="" method="get">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="reset">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
