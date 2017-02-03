import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './ProfileComponents/Pic.jsx';
import BioList from './ProfileComponents/BioList.jsx';
import Content from './ProfileComponents/Content.jsx';

//comment out once we get real data
import fakeData from './ProfileComponents/fakeData.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>
          <small>Profile Page for HR Peeps</small>
        </h1>
        <header>
          <figure className="profile-banner">
            <img src={"https://hrhqdir.s3.amazonaws.com/assets/ssom-landing-page/assets/images/logo/hack-reactor-logo-gray-blue.png"} style={{width: 350, height: 100}}/>
          </figure>
          <Pic photo={this.props.photo} />
          <BioList userInfo={this.props.userInfo} />
          <h1>{this.props.userInfo.name}</h1>
        </header>
        <div className="content-block">
          <Content userInfo={this.props.userInfo} posts={this.props.posts} friends={this.props.friends} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Profile userInfo={fakeData.fakeUser} posts={fakeData.fakePosts} photo={fakeData.fakePhoto} friends={fakeData.fakeFriends} />, document.getElementById('profile')
);