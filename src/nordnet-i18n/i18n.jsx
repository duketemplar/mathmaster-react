import React from 'react';

import { IntlMixin } from 'react-intl';

export default (Component) => {
  class i18n extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    getChildContext() {
      return {
        formats: this.props.formats,
        messages: this.props.messages,
        locales: this.props.locales,
      };
    }

    render() {
      return (
        <Component { ...this.props } />
      );
    }
  }

  i18n.childContextTypes = {
    formats: React.PropTypes.object,
    messages: React.PropTypes.object.isRequired,
    locales: React.PropTypes.array.isRequired,
  };

  return i18n;
};
