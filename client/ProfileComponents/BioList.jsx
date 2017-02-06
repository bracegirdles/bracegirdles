// Component for Bio including name, alumnus status, and cohort #

import React from 'react';
import BioListEntry from './BioListEntry.jsx'

const BioList = (props) => (
  <div className='profile-stats'>
    <BioListEntry user={props.userInfo} />
  </div>
);

BioList.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

export default BioList;