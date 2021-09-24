import { ApiConfig } from '@common/types/api';
import { fetchAPI } from '@framework/utils';

class Config {
  private config: ApiConfig;
  constructor(config: ApiConfig) {
    this.config = config;
  }
  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({ apiURL: 'http://localhost:4000/graphql', fetch: fetchAPI });

export function getConfig(): ApiConfig {
  return configWrapper.getConfig();
}
