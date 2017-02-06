import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Hack Reactor Alumni Network</a>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;