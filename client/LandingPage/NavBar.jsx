import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Hack Reactor Alumni Network</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#signup">Signup  <i className="fa fa-user-plus"></i></a></li>
          <li><a href="#login">Login  <i className="fa fa-user"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;