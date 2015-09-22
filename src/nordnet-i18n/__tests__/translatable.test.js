import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import translatable from '../translatable';

describe('translatable', () => {
  class MyComponent extends React.Component {
    render() {
      return (<div></div>);
    }
  }

  let component;

  beforeEach(() => {
    const Wrapper = translatable(MyComponent);
    const tree = TestUtils.renderIntoDocument(React.createElement(Wrapper));
    component = TestUtils.findRenderedComponentWithType(tree, MyComponent);
  });

  it('expose the translatable function as a prop', () => expect(component.props.getIntlMessage).to.be.a('function'));
});

