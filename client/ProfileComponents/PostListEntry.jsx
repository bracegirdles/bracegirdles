// Component for each individual post within the Post component

import React from 'react';

const PostListEntry = ({postEntry}) => (
  <div className="post-list-entry">
    <div className="post-list-entry-title">
      {postEntry.title}
    </div>
    <div className="post-list-entry-link">
      {postEntry.content}
    </div>
  </div>

);

PostListEntry.propTypes = {
  postEntry: React.PropTypes.object.isRequired
};

export default PostListEntry;