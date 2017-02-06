import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './SettingsComponents/Settings.jsx';

window.onload = () => {
  ReactDOM.render(<Settings />, document.getElementById('settings')
  );
};