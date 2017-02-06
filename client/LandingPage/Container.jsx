import React from 'react';
import Login from './Login.jsx';

const Container = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="content">
        <h1>Hack Reactor Alumni Network</h1>
        <h3>The Nuclear Network for Hack Reactor Alumni</h3>
        <Login />
        <div className="row omb_row-sm-offset-3 omb_loginOr">
          <div className="col-xs-12 col-sm-6">
            <hr className="omb_hrOr"></hr>
            <span className="omb_spanOr">Or</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Container;