( function( $ ) {
	'use strict';
	const blockActions = {
		/**
		 * Custom front-end JS for blocks as needed. Initialize this object.
		 */
		init() {
			console.log(`mcblocks`);
		},

		isAdmin() {
			const el = document.body;
			return el ? el.classList.contains( 'wp-admin' ) : false;
		},
	};

	blockActions.init();
}( jQuery ) );
