import React from 'react';
import Container from './Container.jsx';
import SignUp from './SignUp.jsx';
import PageOut from '../PageOut.jsx';

const Landing = () => (
  <PageOut>
    <Container />
    <a href="/signup"><button className="btn btn-lg btn-primary" type="text">Sign Up</button></a>
  </PageOut>
);

export default Landing;
