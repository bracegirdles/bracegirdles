import React from 'react';
import Container from './Container.jsx';
import SignUp from './SignUp.jsx';
import NavBarOut from '../NavBarOut.jsx';

const Landing = () => (
  <div className="landing-home">
    <NavBarOut />
    <h1>Hack Reactor Alumni Network</h1>
    <h3>The Nuclear Network for Hack Reactor Alumni</h3>
    <a href="/signup"><button className="btn btn-lg btn-primary" type="text">Sign Up</button></a>
  </div>
);

export default Landing;
