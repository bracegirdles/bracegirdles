import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './LandingPage/SignUp.jsx';

window.onload = () => {
  ReactDOM.render(<SignUp />, document.getElementById('signup')
  );
};