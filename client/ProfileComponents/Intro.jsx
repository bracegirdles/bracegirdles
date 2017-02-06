import React from 'react';

const Intro = (props) => (
  <div className='col-lg-8'>
    <div>{props.description}</div>
    <div>email: {props.email}</div>
    <div>github: {props.github}</div>
  </div>
);

Intro.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default Intro;