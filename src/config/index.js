const base = '/api/v1';
const domain = 'somecompany.com';
const Defaults = {
  appName: 'IconRCP',
  domain,
  defaultLocale: {
    lang: 'pl'
  },
  app: {
    platforms: ['ios', 'android']
  },
  apis: {
    baseUrl: `https://api.${domain}`,
    public: {
      base: `${base}`,
      backend: `${base}`
    },
    user: {
      base: `${base}`,
      login: `${base}/login`,
      clearUserData: `${base}/clearUserData`
    }
  }
};

export default Defaults;
