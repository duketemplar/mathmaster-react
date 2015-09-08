import React from 'react';

import { IntlMixin } from 'react-intl';

export default (Component) => {
  class i18n extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.translate = IntlMixin.getIntlMessage.bind(this);
    }

    getChildContext() {
      return {
        formats: this.props.formats,
        messages: this.props.messages,
        locales: this.props.locales,
        translate: this.translate,
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
    translate: React.PropTypes.func.isRequired,
  };

  return i18n;
};
