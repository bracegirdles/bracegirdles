// body component containing intro, posts, and friends
import React from 'react';
import PostList from './PostList.jsx';
import Friends from './Friends.jsx';
import Intro from './Intro.jsx';

const Content = ({userInfo, posts, friends}) => (
  <div>
    <div className="intro-container">
      <Intro userInfo={userInfo} />
    <div className="friends-block">
      <Friends friends={friends} />
    </div>
    </div>
    <div className="posts-block">
      <PostList posts={posts} />
    </div>
  </div>
);

export default Content;