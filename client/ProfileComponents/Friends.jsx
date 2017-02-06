// Component for friends

import React from 'react';

const Friends = ({friends}) => (
<div>
  <hr></hr>
  <h3><strong>Friends</strong></h3>
  <p>{friends.map((friend, i) => (
      <div className="friend" key={i}>{friend}</div>
    ))}</p>
</div>
);

Friends.propTypes = {
  friends: React.PropTypes.array.isRequired
};

export default Friends;
