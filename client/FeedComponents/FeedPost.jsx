import React from 'react';

const FeedPost = ({post}) => (
  <div className="feed-post">
    <div className="row">
      <div className="col-lg-2">
        <div className="thumbnail">
        <img className="img-responsive user-photo" src={post.thumbnail} />
        </div>
      </div>

      <div className="col-lg-10">
        <div className="panel panel-default">
          <div className="panel-heading">
            <strong>{post.user}</strong>
          </div>
          <div className="panel-body">
            <strong>
              {post.title}
            </strong>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeedPost;