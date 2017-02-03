import {fakePosts} from './fakeData.js';
import Postlist from '../../../client/ProfileComponents/PostList.jsx';
import {expect} from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

describe('PostList', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass,
    createRenderer
  } = ReactTestUtils;

  // When testing a React component that renders other nested components,
  // it's a common practice to "shallow render" the component, or render
  // only a single level deep. This isolates the component from it's children
  // See more: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(PostList)).to.be.false;
  });

  it('should render a single post list component', function() {
    var post = findRenderedDOMComponentWithClass(PostList, 'post-list');
    expect(post).to.exist;
  });

  it('should render forms for submitting a post', function() {
    var shallowRenderer = createRenderer();

    shallowRenderer.render(
      <PostSubmit />
    );

    var postSubmit = shallowRenderer.getRenderOutput();
    expect(postSubmit).to.be(postSubmit)
  });

  it('should render one `PostListEntry` when given one post', function() {
    var shallowRenderer = createRenderer();

    shallowRenderer.render(
      <PostList postEntry={fakePosts[0]} />
    );

    var PostList = shallowRenderer.getRenderOutput();
    expect(PostList.props.posts[0].text).to.be('This is post 1')
  });

  it('should render three `PostListEntry` when given three posts', function() {
    var shallowRenderer = createRenderer();

    shallowRenderer.render(
      <PostList posts={fakePosts} />
    );

    var postList = shallowRenderer.getRenderOutput();
    expect(postList.props.children).to.have.length(3);
    postList.props.children.forEach(child => expect(child.type).to.equal(PostListEntry));
  });


});