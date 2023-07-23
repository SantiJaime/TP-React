import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Homepage
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/ej1">
              Ejercicio 1
            </NavLink>
            <NavLink className="nav-link" to="/ej2">
              Ejercicio 2
            </NavLink>
            <NavLink className="nav-link" to="/ej3">
              Ejercicio 3
            </NavLink>
            <NavLink className="nav-link" to="/ej4">
              Ejercicio 4
            </NavLink>
            <NavLink className="nav-link" to="/ej5">
              Ejercicio 5
            </NavLink>
            <NavLink className="nav-link" to="/ej6">
              Ejercicio 6
            </NavLink>
            <NavLink className="nav-link" to="/ej7">
              Ejercicio 7
            </NavLink>
            <NavLink className="nav-link" to="/ej8">
              Ejercicio 8
            </NavLink>
            <NavLink className="nav-link" to="/ej9">
              Ejercicio 9
            </NavLink>
            <NavLink className="nav-link" to="/ej10">
              Ejercicio 10
            </NavLink>
            <NavLink className="nav-link" to="/ej11">
              Ejercicio 11
            </NavLink>
            <NavLink className="nav-link" to="/ej12">
              Ejercicio 12
            </NavLink>
            <NavLink className="nav-link" to="/ej13">
              Ejercicio 13
            </NavLink>
            <NavLink className="nav-link" to="/ej14">
              Ejercicio 14
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
