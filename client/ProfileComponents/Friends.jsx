// Component for friends

import React from 'react';

const Friends = ({friends}) => (
  <div className="col-lg-8">Friends
    <br></br>
    {friends.map((friend, i) => (
      <div className="friend" key={i}>{friend}</div>
    ))}
  </div>
);

Friends.propTypes = {
  friends: React.PropTypes.array.isRequired
};

export default Friends;
