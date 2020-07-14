'use strict';
module.exports = function( grunt ) {
	grunt.initConfig( {
		uglify: {
			dist: {
				files: {
					'lib/js/block.min.js': [ 'lib/js/block.js' ],
				},
			},
		},
		// Convert our SCSS to CSS files.
		sass: {
			dist: {
				options: {
					style: 'expanded',
				},
				files: {
					'lib/css/style.css': 'lib/css/scss/style.scss',
					'lib/css/style-editor.css': 'lib/css/scss/style-editor.scss',
				},
			},
		},

		// Minify our CSS files.
		cssmin: {
			target: {
				files: {
					'lib/css/style.min.css': [ 'lib/css/style.css' ],
					'lib/css/style-editor.min.css': [ 'lib/css/style-editor.css' ],
				},
			},
		},

		// Autoprefixer for our CSS files.
		postcss: {
			options: {
				map: true,
				processors: [
					require( 'autoprefixer' )(),
				],
			},
			dist: {
				src: [ 'lib/css/style*.css' ],
			},
		},

		// Watch for changes and run associated tasks.
		watch: {
			general_css: {
				files: 'lib/css/scss/style.scss',
				tasks: [ 'postcss', 'sass', 'cssmin' ],
				options: {
					spawn: false,
					event: [ 'all' ],
				},
			},
			editor_css: {
				files: 'lib/css/scss/style-editor.scss',
				tasks: [ 'postcss', 'sass', 'cssmin' ],
				options: {
					spawn: false,
					event: [ 'all' ],
				},
			},
		},
	} );

	// Load tasks.
	grunt.loadNpmTasks( 'grunt-contrib-uglify-es' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-postcss' );

	// Register tasks.
	grunt.registerTask( 'default', [
		'uglify',
		'sass',
		'cssmin',
		'postcss',
		'watch',
	] );
};
