import React from 'react';

const FeedPost = ({post}) => (
  <div>
    <div className="post-user">{post.user}</div>
    <div className="title">{post.title}</div>
    <div className="post-content">{post.content}</div>
  </div>
);

export default FeedPost;