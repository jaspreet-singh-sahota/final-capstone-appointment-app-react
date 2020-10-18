const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://jassi-appointment-app.herokuapp.com/', changeOrigin: true }));
app.listen(3000);
