import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './LandingComponents/Landing.jsx';
import css from './css/landing.css';

window.onload = () => {
  ReactDOM.render(<Landing />, document.getElementById('landing'));
};
