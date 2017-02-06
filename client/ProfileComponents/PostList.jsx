// Component containing all of User's posts

import React from 'react';
import PostListEntry from './PostListEntry.jsx';
import PostSubmit from './PostSubmit.jsx';

const PostList = ({posts}) => (
  <div className="container">
    <div className="col-lg-3"></div>
      <h3>Posts</h3>
      <div className="col-lg-6">
        <PostSubmit />
        <div className="post-entries">
          {posts.map((post, i) =>
            <PostListEntry postEntry={post} key={i}/>
          )}
        </div>
      </div>
      <div className="col-lg-3"></div>
  </div>
);

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};

export default PostList;
