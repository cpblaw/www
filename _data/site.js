require( 'dotenv' ).config();

let url = 'https://www.cpblaw.com';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://localhost:8080';
	break;

	case 'preview':
		url = 'https://preview.cpblaw.com';
	break;
}

module.exports = {
	url: url
	,title: 'Carter Perry Bailey LLP'
	,environment: process.env.ELEVENTY_ENV
	,GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API
	,ADOBE_PDF_VIEWER: process.env.ADOBE_PDF_VIEWER
	,timezone: 'UTC'
};
