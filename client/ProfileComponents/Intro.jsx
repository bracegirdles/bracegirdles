import React from 'react';
import IntroEntry from './IntroEntry.jsx';

const Intro = ({userInfo}) => (
  <div className='intro-container'>
    <IntroEntry user={userInfo} />
  </div>
);

Intro.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default Intro;