// body component containing intro, posts, and friends
import React from 'react';
import PostList from './PostList.jsx';
import Friends from './Friends.jsx';
import Intro from './Intro.jsx';

const Content = (props) => (
  <div className="container">
    <div className="col-lg-3 col-md-3 hidden-sm hidden-xs">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="media">
            <Intro user={props.userInfo} />
            <Friends friends={props.friends} />
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-9 col-md-9 hidden-sm hidden-xs">
      <PostList posts={props.posts} />
    </div>
  </div>
);

export default Content;