import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/profile.css';

//comment out once we get real data
import fakeData from './ProfileComponents/fakeData.jsx';
import Profile from './ProfileComponents/Profile.jsx';


// Currently this is just dummy data.
// TODO: hook up this component with database queried data
window.onload = () => {
  ReactDOM.render(<Profile userInfo={fakeData.fakeUser}
                           posts={fakeData.fakePosts}
                           photo={fakeData.fakePhoto}
                           friends={fakeData.fakeFriends} />, document.getElementById('profile')
  );
};
