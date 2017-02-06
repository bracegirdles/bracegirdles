import React from 'react';

const NavBarIn = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Hack Reactor Alumni Network</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/feed">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBarIn;
