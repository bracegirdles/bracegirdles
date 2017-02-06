import React from 'react';

const Intro = (props) => (
  <div className="media-body">
    <h3><strong>Bio</strong></h3>
    <p>{props.user.description}</p>
    <hr></hr>
    <h3><strong>Info</strong></h3>
    <p>email: {props.user.email}</p>
    <p>github: {props.user.github}</p>
  </div>
);

Intro.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Intro;