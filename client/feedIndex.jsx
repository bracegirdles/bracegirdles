import React from 'react';
import ReactDOM from 'react-dom';

//comment out once we get real data
import fakeData from './ProfileComponents/fakeData.jsx';
import Feed from './FeedComponents/Feed.jsx';

window.onload = () => {
  ReactDOM.render(<Feed posts={fakeData.posts} />, document.getElementById('feed')
  );
};