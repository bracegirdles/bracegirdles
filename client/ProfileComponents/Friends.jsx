// Component for friends

import React from 'react';

const Friends = ({friends}) => (
<div>
  <hr></hr>
  <h3><strong>Friends</strong></h3>
  <div>{friends.map((friend, i) => (
      <p className="friend" key={i}>{friend}</p>
    ))}</div>
</div>
);

Friends.propTypes = {
  friends: React.PropTypes.array.isRequired
};

export default Friends;
