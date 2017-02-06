import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './Pic.jsx';
import BioList from './BioList.jsx';
import Content from './Content.jsx';
import fakeData from './fakeData.jsx';
import NavBarIn from '../NavBarIn.jsx';

// TEMPORARY FOR DEV PURPOSES:
// import NavBarIn from '../SettingsComponents/NavBarIn.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavBarIn />
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
}

export default Profile;
