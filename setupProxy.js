import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

module.exports = function proxy(app) {
  app.use(
    cors(),
    createProxyMiddleware({
      target: 'https://jassi-appointment-app.herokuapp.com/',
      changeOrigin: true,
    }),
  );
};
