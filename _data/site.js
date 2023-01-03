require( 'dotenv' ).config();

let url = 'https://www.cpblaw.com';
let ADOBE_PDF_VIEWER = process.env.ADOBE_PDF_VIEWER;

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://localhost:8081';
	break;

	case 'preview':
		url = 'https://preview.cpblaw.com';
		ADOBE_PDF_VIEWER = process.env.ADOBE_PDF_VIEWER_PREVIEW;
	break;
}

module.exports = {
	url: url
	,title: 'Carter Perry Bailey LLP'
	,environment: process.env.ELEVENTY_ENV
	,GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API
	,ADOBE_PDF_VIEWER: ADOBE_PDF_VIEWER
	,timezone: 'UTC'
};
