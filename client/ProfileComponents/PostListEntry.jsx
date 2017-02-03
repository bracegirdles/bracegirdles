// Component for each individual post within the Post component

import React from 'react';

const PostListEntry = ({title, content}) => (
  <div className="post-list-entry">
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

PostListEntry.propTypes = {
  postEntry: React.PropTypes.object.isRequired
};

export default PostListEntry;