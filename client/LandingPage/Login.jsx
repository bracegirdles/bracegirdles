import React from 'react';

const Login = () => (
  <div className="nav navbar-nav navbar-right">
    <div className="omb_login">
      <div className="row omb_row-sm-offset-3">
        <div className="col-xs-12 col-sm-6">
          <form className="omb_loginForm" action="" autoComplete="off" method="POST">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <input type="text" className="form-control" name="username" placeholder="Username" />
            </div>
            <span className="help-block"></span>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock"></i></span>
              <input  type="password" className="form-control" name="password" placeholder="Password" />
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
