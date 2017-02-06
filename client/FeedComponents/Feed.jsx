import React from 'react';
import FeedPost from './FeedPost.jsx';
import NavBarIn from '../NavBarIn.jsx';
// fake data for testing
import fakeData from '../ProfileComponents/fakeData.jsx';
import PostSubmit from '../ProfileComponents/PostSubmit.jsx';
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: fakeData.fakeAllPosts //get all posts from posts table
    };
  }

  render() {
    return (
      <div className="feed-home">
        <NavBarIn />
        <div className="container">
          <h1>Posts</h1>
          <PostSubmit />
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            {this.state.allPosts.map((entry, i) => (
            <FeedPost post={entry} key={i}/>
            ))}
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    )
  }
};

export default Feed;
