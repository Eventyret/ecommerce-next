import { fetchAPI } from '@framework/utils';

class Config {
  private config: any;
  constructor(config: any) {
    this.config = config;
  }
  getConfig(): any {
    return this.config;
  }
}

const configWrapper = new Config({ apiURL: 'http://localhost:4000/graphql', fetch: fetchAPI });

export function getConfig() {
  return configWrapper.getConfig();
}
