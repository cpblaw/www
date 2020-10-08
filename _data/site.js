require( 'dotenv' ).config();

let url = 'https://www.cpblaw.com/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://localhost:8080/';
	break;

	default:
		url = '/';
}

module.exports = {
	url: url
	,title: 'Carter Perry Bailey LLP'
	,environment: process.env.ELEVENTY_ENV
	,timezone: 'UTC'
};
