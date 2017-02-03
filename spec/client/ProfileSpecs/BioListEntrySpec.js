import fakeData from './fakeData.js';
import BioListEntry from '../../../client/ProfileComponents/BioListEntry.jsx';
import {expect} from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

describe('BioListEntry', function() {
  var {
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass,
    createRenderer,
    renderIntoDocument
  } = ReactTestUtils;
  const renderer = ReactTestUtils.createRenderer();

  beforeEach(function() {
    // console.log(fakeUser);
    // var bioentry = renderIntoDocument(
    //   <BioListEntry user={fakeData.fakeUser}/>
    // );
    renderer.render(<BioListEntry user={fakeData.fakeUser}/>);
    const result = renderer.getRenderOutput();
    console.log(result);
  });

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(BioListEntry)).to.be.false;
  });

  it('should render a single bio list entry component', function() {
    // var bio = findRenderedDOMComponentWithClass(bioentry, 'bio-body');
    // expect(bio).to.exist;
    // console.log('inside test ', result);
    expect(result.type).to.be('ul');
  });

});