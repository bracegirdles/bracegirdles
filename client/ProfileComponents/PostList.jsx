// Component containing all of User's posts

import React from 'react';
import PostListEntry from './PostListEntry.jsx';
import PostSubmit from './PostSubmit.jsx';

const PostList = ({posts}) => (
  <div className="post">
    <h3>Posts</h3>
    <PostSubmit />
    <div className="post-list">
      {posts.map(postEntry =>
        <PostListEntry postEntry={postEntry} />
      )}
    </div>
  </div>
);

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};

export default PostList;