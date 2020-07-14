<?php
/**
 * Metal & Coffee Blocks
 *
 * @package   MC\MCBlocks
 * @author    Ebonie Butler
 * @license   GPL2
 */

namespace MC\MCBlocks;

add_action( 'init', __NAMESPACE__ . '\register_blocks', 40 );

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_blocks() {

	// Fail if block editor is not supported.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// List all of the blocks for your plugin.
	$blocks = [
		'mc-blocks/multi-tab',
		'mc-blocks/card-deck',
	];

	// Register each block with same CSS and JS.
	foreach ( $blocks as $block ) {
		register_block_type(
			$block,
			[
				'script'        => 'mc-blocks-front-end-js',
				'editor_script' => 'mc-blocks-js',
				'style'         => 'mc-blocks-css',
				'editor_style'  => 'mc-blocks-editor-css',
			]
		);
	}
}
