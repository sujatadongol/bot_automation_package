const config = {
  env: process.env.NODE_ENV || 'production',
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.anydone.com',
  mqttURL: process.env.REACT_APP_MQTT_BASE_URL || 'ws.anydone.com',
  projectEnv: process.env.PROJECT_ENV || 'production',
  endpoints: {},
  subDomain: process.env.SUBDOMAIN || 'anydone.com',
  deskUrl: process.env.DESK_URL || 'https://desk.anydone.com',
  inboxUrl: process.env.INBOX_URL || 'https://inbox.anydone.com',
};

console.log({ config }, '.......');
export default config;
