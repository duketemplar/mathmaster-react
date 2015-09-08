import '../initialize-intl';
import i18n from '../i18n.jsx';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('i18n', () => {
  class MyComponent extends React.Component {
    render() {
      return (<h2>{this.context.translate(this.props.title)}</h2>);
    }
  }

  MyComponent.contextTypes = {
    translate: React.PropTypes.func.isRequired,
  };

  MyComponent.propTypes = {
    title: React.PropTypes.string,
  };

  const intlData = {
    locales: ['en-US'],
    messages: {
      post: {
        title: 'Hej hopp',
        meta: 'Posted {ago}, {num, plural, one{# comment} other{# comments}}',
      },
    },
  };

  const App = i18n(MyComponent);

  it('exposes the translate method', () => {
    const tree = TestUtils.renderIntoDocument(
      <App title="post.title" {...intlData}/>
    );

    const component = TestUtils.findRenderedDOMComponentWithTag(tree, 'h2');
    expect(component.getDOMNode().textContent).to.equal('Hej hopp');
  });
});
