import React from 'react';
import FeedPost from './FeedPost.jsx';
import NavBarIn from '../NavBarIn.jsx';
// fake data for testing
import fakeData from '../ProfileComponents/fakeData.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: fakeData.fakePosts //get all posts from posts table
    };
  }

  render() {
    return (
      <div className="feed-home">
        <NavBarIn />
        <div className="feed-page">
          <h1>Posts</h1>
          {this.state .allPosts.map((entry, i) => (
          <FeedPost post={entry} key={i}/>
          ))}
        </div>
      </div>
    )
  }
};

export default Feed;
