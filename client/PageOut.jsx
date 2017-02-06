import React from 'react';
import NavBar from './LandingPage/NavBar.jsx';

const PageOut = (props) => (
  <html>
    <body>
      <div id="container">
        <NavBar />
        {props.children}
      </div>
    </body>
  </html>
);

export default PageOut;