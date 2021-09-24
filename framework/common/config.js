const path = require('path');
const merge = require('deepmerge');
const fs = require('fs');
const prettier = require('prettier');

const ALLOWED_FRAMEWORKS = ['shopify', 'shopify-local', 'bigcommerce'];
const FALLBACK_FRAMEWORK = 'shopify';

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) throw new Error('The API Framework is missing, please add a valid provider');
  if (!ALLOWED_FRAMEWORKS.includes(framework)) throw new Error(`The API Framework: ${framework} is not supported, only ${ALLOWED_FRAMEWORKS.join(', ')} is supported`);
  if (framework === 'shopify-local') framework = FALLBACK_FRAMEWORK;

  const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);
  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, prettier.format(JSON.stringify(tsConfig), { parser: 'json' }));
  return config;
}

module.exports = { withFrameworkConfig };
