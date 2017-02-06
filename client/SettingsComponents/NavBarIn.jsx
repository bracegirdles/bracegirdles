import React from 'react';

const NavBarIn = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Hack Reactor Alumni Network</a>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/feed">Home</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li style="float:right"><a href="/settings">Settings</a></li>
            <li style="float:right"><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBarIn;