// Component for profile picture

import React from 'react';



const Pic = ({photo}) => (
    <figure className="profile-picture" style={{backgroundImage: "url(" + photo + ")"}}>
    </figure>
);

Pic.propTypes = {
  photo: React.PropTypes.string.isRequired
};

export default Pic;