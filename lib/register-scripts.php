<?php
/**
 * Metal & Coffee Blocks
 *
 * @package   MC\MCBlocks
 * @author    Ebonie Butler
 * @license   GPL2
 */

namespace MC\MCBlocks;

add_action( 'init', __NAMESPACE__ . '\register_scripts' );

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_scripts() {
	$block_path        = '/build/index.js';
	$script_path       = '/lib/js/block.js';
	$style_path        = '/lib/css/style.css';
	$style_editor_path = '/lib/css/style-editor.css';

	$js_dependencies = [ 'wp-plugins', 'wp-element', 'wp-edit-post', 'wp-i18n', 'wp-api-request', 'wp-data', 'wp-hooks', 'wp-plugins', 'wp-components', 'wp-blocks', 'wp-editor', 'wp-compose' ];

	// Register the bundled editor block JS file.
	wp_register_script(
		'tmd-blocks-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $block_path ),
		true
	);

	// Register front-end block JS file.
	wp_register_script(
		'tmd-blocks-front-end-js',
		_get_plugin_url() . $script_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $script_path ),
		true
	);

	// Register block styles CSS file on both editor and front-end.
	wp_register_style(
		'tmd-blocks-css',
		_get_plugin_url() . $style_path,
		[],
		filemtime( _get_plugin_directory() . $style_path )
	);

	// Register block styles CSS file on editor only.
	wp_register_style(
		'tmd-blocks-editor-css',
		_get_plugin_url() . $style_editor_path,
		[],
		filemtime( _get_plugin_directory() . $style_editor_path )
	);
}
