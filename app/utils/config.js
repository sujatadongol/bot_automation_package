const config = {
  env: process.env.NODE_ENV || 'production',
  projectEnv: process.env.PROJECT_ENV || 'production',
};

console.log('ENV_CONFIG :', config);

export default config;
