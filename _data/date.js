require('dotenv').config();

module.exports = function() {
	if ( process.env.ELEVENTY_ENV === 'production' ) {
		return 'git Last Modified';
	} else {
		return new Date().toISOString();
	}
};
