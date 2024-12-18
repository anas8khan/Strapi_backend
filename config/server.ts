module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myRandomKey1', 'myRandomKey2', 'myRandomKey3']), // Add your keys here
  },
});
