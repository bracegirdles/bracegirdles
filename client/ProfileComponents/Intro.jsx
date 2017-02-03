import React from 'react';

const Intro = ({description, email, github}) => (
  <div className='intro-container'>
    <div>{description}</div>
    <div>email: {email}</div>
    <div>github: {github}</div>
  </div>
);

Intro.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default Intro;