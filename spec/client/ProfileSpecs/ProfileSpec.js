import {fakeUser} from './fakeData.js';
import {fakePost} from './fakeData.js';
import {fakePhoto} from './fakeData.js';
import {fakeFriends} from './fakeData.js';
import Profile from '../../../client/ProfileComponents/Profile.jsx';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import React from 'react';

describe('Profile', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = ReactTestUtils;

  var profile;

  beforeEach(function() {
    profile = renderIntoDocument(
      <Profile userInfo={fakeUser} posts={fakePost} photo={fakeData} friends={fakeFriends} />
    );
  });


  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Profile)).to.be.true;
  });

  it('should render a single Pic component', function() {
    var profilePic = findRenderedDOMComponentWithClass(profile, 'profile-picture');
    expect(profilePic).to.exist;
  });

  it('should render a single Bio component', function() {
    var bio = findRenderedDOMComponentWithClass(profile, 'profile-stats');
    expect(bio).to.exist;
  });

    it('should render a single Bio component', function() {
    var bio = findRenderedDOMComponentWithClass(profile, 'profile-stats');
    expect(bio).to.exist;
  });

    it('should render a single Content component', function() {
    var content = findRenderedDOMComponentWithClass(profile, 'content-body');
    expect(content).to.exist;
  });

});