import React from 'react';

const IntroEntry = ({user}) => (
  <div className="intro-content">
    <br></br> {user.description}
    <br></br>
    <br></br>
    email: {user.email}
    <br></br>
    <br></br>
    github: {user.github}
  </div>
);

IntroEntry.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default IntroEntry;