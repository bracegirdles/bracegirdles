import React from 'react';
import NavBarIn from './NavBarIn.jsx';

const PageIn = (props) => {
  <div>
    <NavBarIn />
    {props.children}
  </div>
}

export default PageIn;