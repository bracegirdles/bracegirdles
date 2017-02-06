import React from 'react';

const NavBarOut = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Hack Reactor Alumni Network</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <form action="/login" id="login" className="navbar-form navbar-right" role="form" method="post">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input id="username" type="text" className="form-control" name="username" placeholder="Username"/>
          </div>

          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </nav>
);

export default NavBarOut;
