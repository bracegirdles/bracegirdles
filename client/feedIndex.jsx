import React from 'react';
import ReactDOM from 'react-dom';

//comment out once we get real data
import fakeData from './ProfileComponents/fakeData.jsx';
import Feed from './FeedComponents/Feed.jsx';


// Currently this is just dummy data.
// TODO: hook up this component with database queried data
window.onload = () => {
  ReactDOM.render(<Feed posts={fakeData.posts} />, document.getElementById('feed')
  );
};
