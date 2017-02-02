// Component for entire Profile page. It should render Pic, Bio, Posts, and Friends.

import React from 'react';
import Pic from './Pic.jsx';
import BioList from './BioList.jsx';
import PostList from './PostList.jsx';
import Friends from './Friends.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="pic-position">
          <Pic photo={this.props.fakePhoto} />
        </div>
        <div className="bio-position">
          <BioList userInfo={this.props.fakeUser} />
        </div>
        <div className="posts-position">
          <PostList posts={this.props.fakePosts} />
        </div>
        <div className="friends-position">
          <Friends friends={this.props.fakeFriends} />
        </div>
      </div>
    );
  }
};

export default Profile;
