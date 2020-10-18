const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function proxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://jassi-cultfit-app.herokuapp.com/',
      changeOrigin: true,
    }),
  );
};
