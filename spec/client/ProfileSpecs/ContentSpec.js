import fakeData from './fakeData.js';
import Content from '../../../client/ProfileComponents/Content.jsx';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Content', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = ReactTestUtils;

  var content;

  beforeEach(function() {
    content = renderIntoDocument(
      <Content userInfo={fakeData.userInfo} posts={fakeData.posts} friends={fakeData.friends} />
    );
  });

  it('should render a single Posts component', function() {
      var post = findRenderedDOMComponentWithClass(profile, 'post-list');
      expect(post).to.exist;
    });

  it('should render a single Friends component', function() {
    var friend = findRenderedDOMComponentWithClass(profile, 'friends');
    expect(friend).to.exist;
  });
});