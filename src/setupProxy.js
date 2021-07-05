const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/blogApi', {
			target: 'http://localhost:8787',
			pathRewrite: { '^/blogApi': '/api' },
			changeOrigin: true, // target是域名的话，需要这个参数，
			secure: false,
		})
	);
	// app.use(
	// 	createProxyMiddleware('/localapi', {
	// 		target: 'http://localhost:3000',
	// 		// pathRewrite: {'^/api' : ''},
	// 		changeOrigin: true, // target是域名的话，需要这个参数，
	// 		secure: false,
	// 	})
	// );
};
