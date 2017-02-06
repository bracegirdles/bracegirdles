import React from 'react';
import NavBar from './NavBar.jsx';
import Container from './Container.jsx';
import SignUp from './SignUp.jsx';

const Landing = () => (
  <div className="landing-home">
    <NavBar />
    <Container />
    <a href="/signup"><button className="btn btn-lg btn-primary" type="text">Sign Up</button></a>
  </div>
);

export default Landing;
