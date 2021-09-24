const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  i18n: {
    locales: ['en-GB', 'en-US', 'es'],
    defaultLocale: 'en-GB',
  },
  reactStrictMode: true,
});
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
