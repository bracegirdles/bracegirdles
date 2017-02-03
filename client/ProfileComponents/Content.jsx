// body component containing intro, posts, and friends
import React from 'react';
import PostList from './PostList.jsx';
import Friends from './Friends.jsx';
import Intro from './Intro.jsx';

const Content = ({userInfo, posts, friends}) => (
  <div className="content-block">
    <Intro userInfo={userInfo} />
    <Friends friends={friends} />
    <PostList posts={posts} />
  </div>
);

export default Content;