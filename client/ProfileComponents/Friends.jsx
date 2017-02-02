// Component for friends

import React from 'react';

const Friends = ({friends}) => (
  <div className="friends-list">Friends
    <br></br>
    {friends.map(friend => (
      <div className="friend">{friend}</div>
    ))}
  </div>
);

Friends.propTypes = {
  friends: React.PropTypes.array.isRequired
};

export default Friends;