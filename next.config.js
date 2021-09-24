const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  framework: {
    name: 'shopify-local',
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
});
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
