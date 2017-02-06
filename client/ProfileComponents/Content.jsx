// body component containing intro, posts, and friends
import React from 'react';
import PostList from './PostList.jsx';
import Friends from './Friends.jsx';
import Intro from './Intro.jsx';

const Content = (props) => (
  <div className="container">
    <div className='col-lg-3'>
      <Intro userInfo={props.userInfo} />
      <Friends friends={props.friends} />
    </div>
    <div className='col-lg-9'>
      <PostList posts={props.posts} />
    </div>
  </div>
);

export default Content;