import {fakeUser} from './fakeData.js';
import BioList from '../../../client/ProfileComponents/BioList.jsx';
import BioListEntry from '../../../client/ProfileComponents/BioListEntry.jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

describe('BioList', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    createRenderer
  } = ReactTestUtils;

  beforeEach(function() {
    var bio = renderIntoDocument(
      <BioList userInfo={fakeUser}/>
    );
  });

  // When testing a React component that renders other nested components,
  // it's a common practice to "shallow render" the component, or render
  // only a single level deep. This isolates the component from it's children
  // See more: https://facebook.github.io/react/docs/test-utils.html#shallow-rendering

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(BioList)).to.be.false;
  });

  it('should render a single bio component', function() {
    var bioinfo = findRenderedDOMComponentWithClass(bio, 'bio');
    expect(bioinfo).to.exist;
  });

  it('should render one `BioListEntry` when given one bio', function() {
    var shallowRenderer = createRenderer();

    shallowRenderer.render(
      <BioListEntry user={fakeUser} />
    );

    var BioList = shallowRenderer.getRenderOutput();
    expect(BioList.props.user.name).to.be('Name LastName')
  });

});