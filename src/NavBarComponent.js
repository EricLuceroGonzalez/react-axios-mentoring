import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={'/'}
              className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link  to={'/peliculas'}className="nav-link">Peliculas</Link>
            </li>
            <li className="nav-item" >
              <Link to={'/form'} className="nav-link">Formulario</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
