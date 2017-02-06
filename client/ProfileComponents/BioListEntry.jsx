// Component for Bio Entry including name, alumnus status, and cohort #

import React from 'react';

const BioListEntry = (props) => (
  <ul className="bio-body">
    <li>{props.user.status} <span>Status</span></li>
    <li>{props.user.cohort} <span>Cohort</span></li>
  </ul>
);

BioListEntry.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default BioListEntry;