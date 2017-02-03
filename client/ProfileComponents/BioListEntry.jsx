// Component for Bio Entry including name, alumnus status, and cohort #

import React from 'react';

const BioListEntry = ({status, cohort}) => (
  <ul className="bio-body">
    <li>{status} <span>Status</span></li>
    <li>{cohort} <span>Cohort</span></li>
  </ul>
);

BioListEntry.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default BioListEntry;