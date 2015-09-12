import Intl from 'intl';
import _ from 'lodash';

// some browsers does not impl. correctly Intl, override it.
global.Intl = Intl;

const LOCALE_INITIALIZERS = {
  'sv-SE': ensuresvSE,
  'fi-FI': ensurefiFI,
  'sv-FI': ensuresvFI,
  'nb-NO': ensurenbNO,
  'no-NO': ensurenbNO,
  'nn-NO': ensurennNO,
  'da-DK': ensuredaDK,
  en: ensureen,
};

export function supportedLocales() {
  return _.keys(LOCALE_INITIALIZERS);
}

export function initializeLocale(locale) {
  const initializer = LOCALE_INITIALIZERS[locale];
  if (!initializer) {
    throw new Error(`Unknown locale "${locale}"`);
  }

  return thenify(initializer).then(i18nData => i18nData);
}

function thenify(f) {
  return new Promise((resolve) => f(resolve));
}

function ensuresvSE(cb) {
  require.ensure([
    'intl/locale-data/jsonp/sv-SE.js',
    'l10n/phrase.sv-SE.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/sv-SE.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.sv-SE.json'),
      locales: ['sv-SE'],
    };

    cb(i18nData);
  });
}

function ensurefiFI(cb) {
  require.ensure([
    'intl/locale-data/jsonp/fi-FI.js',
    'l10n/phrase.fi-FI.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/fi-FI.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.fi-FI.json'),
      locales: ['fi-FI'],
    };

    cb(i18nData);
  });
}

function ensuresvFI(cb) {
  require.ensure([
    'intl/locale-data/jsonp/sv-FI.js',
    'l10n/phrase.sv-FI.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/sv-FI.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.sv-FI.json'),
      locales: ['sv-FI'],
    };

    cb(i18nData);
  });
}

function ensurenbNO(cb) {
  require.ensure([
    'intl/locale-data/jsonp/nb-NO.js',
    'l10n/phrase.nb-NO.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/nb-NO.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.nb-NO.json'),
      locales: ['nb-NO'],
    };

    cb(i18nData);
  });
}

function ensurennNO(cb) {
  require.ensure([
    'intl/locale-data/jsonp/nn-NO.js',
    'l10n/phrase.nn-NO.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/nn-NO.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.nn-NO.json'),
      locales: ['nn-NO'],
    };

    cb(i18nData);
  });
}

function ensuredaDK(cb) {
  require.ensure([
    'intl/locale-data/jsonp/da-DK.js',
    'l10n/phrase.da-DK.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/da-DK.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.da-DK.json'),
      locales: ['da-DK'],
    };

    cb(i18nData);
  });
}

function ensureen(cb) {
  require.ensure([
    'intl/locale-data/jsonp/en.js',
    'l10n/phrase.en.json',
  ], function resolved(require) {
    require('intl');
    require('intl/locale-data/jsonp/en.js');

    // creates localization object with messages for provided locale
    const i18nData = {
      messages: require('l10n/phrase.en.json'),
      locales: ['en'],
    };

    cb(i18nData);
  });
}
