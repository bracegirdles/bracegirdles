import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './LandingComponents/SignUp.jsx';

window.onload = () => {
  ReactDOM.render(<SignUp />, document.getElementById('signup')
  );
};
