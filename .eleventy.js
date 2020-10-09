module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'images' );
	eleventyConfig.addPassthroughCopy( 'favicon' );
	eleventyConfig.addPassthroughCopy( '*.pdf' );
	eleventyConfig.addPassthroughCopy( 'publications' );
	eleventyConfig.addPassthroughCopy( 'print' );

	eleventyConfig.addPairedShortcode( 'accordion', function( content, title ) {
		let accordion = Math.random().toString( 36 ).substring( 7 );

		return `
<div class="card g-brd-none rounded-0 g-mb-15">
<div id="accordion-00-heading-${ accordion }" class="u-accordion__header g-pa-0" role="tab">
	<h5 class="mb-0">
		<a class="collapsed d-block g-color-white g-text-underline--none--hover g-brd-around g-rounded-5 g-pa-10-15 g-bg-primary-dark-v4" href="#accordion-00-body-${ accordion }" data-toggle="collapse" data-parent="#accordion-00" aria-expanded="false" aria-controls="accordion-00-body-${ accordion }">
			<span class="u-accordion__control-icon g-mr-10">
				<i class="fa fa-angle-down"></i>
				<i class="fa fa-angle-up"></i>
			</span>
			${ title }
		</a>
	</h5>
</div>

<div id="accordion-00-body-${ accordion }" class="collapse" role="tabpanel" aria-labelledby="accordion-00-heading$-$accordion}">
	<div class="u-accordion__body g-color-gray-dark-v1">
		${ content }
	</div>
</div>
</div>
		`;
	} );

	eleventyConfig.addFilter( 'where', function( array, property, value ) {
		return array.filter( p => p[ property ] == value );
	} );

	eleventyConfig.addFilter( 'awardYears', function( awards ) {
		return [ ...new Set( awards.map( award => award.year ) ) ];
	} );

	eleventyConfig.addFilter( 'publicationYears', function( publications ) {
		return [ ...new Set( publications.map( publication => publication.year ) ) ];
	} );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addFilter( 'dateFormat', function( value, format ) {
		let moment = require( 'moment' );
		let dateValue = new Date( value );

		return moment( dateValue ).format( format );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false,
		ghostMode: false
	} );

	return {
		dir: {
			layouts: '_layouts'
		}
	};
};
