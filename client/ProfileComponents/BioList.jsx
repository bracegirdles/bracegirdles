// Component for Bio including name, alumnus status, and cohort #

import React from 'react';
import BioListEntry from './BioListEntry.jsx'

const BioList = ({userInfo}) => (
  <div className='profile-stats'>
    <BioListEntry user={userInfo} />
  </div>
);

BioList.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default BioList;