import React from 'react';
import Container from './Container.jsx';
import SignUp from './SignUp.jsx';
import NavBarOut from '../NavBarOut.jsx';

const Landing = () => (
  <div className="landing-home">
    <NavBarOut />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <h1>Hack Reactor Alumni Network</h1>
              <h3>A platform for leveraging your peer network to accelerate your growth as a software engineer.</h3>
              <hr />
              <a href="/signup"><button className="btn btn-lg btn-primary" type="text">Sign Up!</button></a>
            </div>
          </div>
        </div>
      </div>
  </div>
);

// PROVIDE AN IMAGE SOURCE!!!! https://skills.fund/blog

export default Landing;
