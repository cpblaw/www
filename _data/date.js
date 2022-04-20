require( 'dotenv' ).config();

if( process.env.ELEVENTY_ENV === 'production' ) {
	module.exports = 'git Last Modified';
} else {
	module.exports = this.date;
}
