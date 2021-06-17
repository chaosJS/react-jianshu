const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@static': path.resolve(__dirname, 'src/static/'),
			'@': path.resolve(__dirname, 'src/'),
		},
	},
};
