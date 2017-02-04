import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './LandingPage/Landing.jsx'

window.onload = () => {
  ReactDOM.render(<Landing />, document.getElementById('landing'));
};