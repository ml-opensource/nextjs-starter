const envConfig = {
  production: {
    API_URL: '',
    API_VERSION: 'v1',
    GOOGLE_ANALYTICS_ID: false,
    GOOGLE_OPTIMIZE_ID: false,
    GOOGLE_TAG_MANAGER_ID: false,
    REDUX_DEV_TOOLS: false,
  },
  staging: {
    API_URL: '',
    API_VERSION: 'v1',
    GOOGLE_ANALYTICS_ID: false,
    GOOGLE_OPTIMIZE_ID: false,
    GOOGLE_TAG_MANAGER_ID: false,
    REDUX_DEV_TOOLS: false,
  },
  dev: {
    API_URL: '',
    API_VERSION: 'v1',
    GOOGLE_ANALYTICS_ID: false,
    GOOGLE_OPTIMIZE_ID: false,
    GOOGLE_TAG_MANAGER_ID: false,
    REDUX_DEV_TOOLS: true,
  },
};

const currentEnv = (process.browser ? window.ENV : process.env.ENV) || 'dev';

module.exports = envConfig[currentEnv];
