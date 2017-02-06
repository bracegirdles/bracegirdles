import React from 'react';
import NavBarIn from './SettingsComponents/NavBarIn.jsx';

const PageIn = (props) => (
  <html>
    <body>
      <div id="container">
        <NavBarIn />
        {props.children}
      </div>
    </body>
  </html>
);

export default PageIn;