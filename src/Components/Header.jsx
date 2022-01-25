import React from "react";
import img1 from "../images/logo.png"
// import "./node_modules/bootstrap/dist/css/bootstrap-grid.css";
// import "...../node_modules/bootstrap/dist/css/bootstrap-grid.css"
// import "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "...../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css"
import { NavLink } from "react-router-dom";


function Header()
{
    return(
        <>
      <div className="fix">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo-menu" href="#">
      <img className="logo-image" src={img1} alt="" />
      </a>
      <div className="space"></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul id="menu" className="navbar-nav menu-ul">
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/">
      Home<span className="sr-only"></span>
      </NavLink>
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/Main2">
      Sign in
      </NavLink>
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/Main3">
      Contact us
      </NavLink>
    </ul>
    <div className="Num">
    <li className="nav-a1">
    <ul id="socicon" className="social-icons">
  <li>
    <a href="#">
      <i className="fab fa-facebook-f" />
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fab fa-instagram" />
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fab fa-youtube" />
    </a>
  </li>
</ul>
    </li>
    </div>
    <div className="space"></div>
  </div>
</nav>
</div>
<>


 
  

 
</>
        </>
    )
}
export default Header;