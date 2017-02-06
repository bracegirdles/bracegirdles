// Component for each individual post within the Post component

import React from 'react';

const PostListEntry = ({postEntry}) => (
  <div className="col-lg-9">
    <div className="panel panel-default" style={{width: "70%"}}>
      <div className="panel-heading">
        <strong>{postEntry.title}</strong>
      </div>
      <div className="panel-body">
        {postEntry.content}
      </div>
    </div>
  </div>
);

PostListEntry.propTypes = {
  postEntry: React.PropTypes.object.isRequired
};

export default PostListEntry;
