// Component for each individual post within the Post component

import React from 'react';

const PostListEntry = ({postEntry}) => (
  <div className="post-list-entry">
    <h4>{postEntry.title}</h4>
    <p>{postEntry.content}</p>
  </div>
);

PostListEntry.propTypes = {
  postEntry: React.PropTypes.object.isRequired
};

export default PostListEntry;