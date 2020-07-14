<?php
/**
 * Plugin Name: Metal & Coffee Blocks
 * Description: Custom card deck block & multi-tab block.
 * Author: Ebonie Butler
 * Author URI: https://ebonie.me
 * Text Domain: metal-and-coffee-blocks
 * Version: 1.0.0
 *
 * @package MC\MCBlocks
 */

namespace MC\MCBlocks;

// Only run this within WordPress.
if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/*
 * Require WordPress 5.0+. Checking here allows for graceful failure.
 */
if ( version_compare( '5.0', $GLOBALS['wp_version'], '>' ) ) {
	add_action( 'admin_notices', 'ymcblocks_wp_version_notice' );

	/**
	 * Display admin notice for incompatible WP version.
	 *
	 * @since 1.0.0
	 */
	function mcblocks_wp_version_notice() {
		printf(
			'<div class="error"><p>%s</p></div>',
			sprintf(
				/* translators: %1$s is the required WP version, %2$s is the current version */
				esc_html__( 'Metal & Coffee Blocks requires WordPress version %1$s or above. Your site is using WordPress version %2$s.', 'metal-and-coffee-blocks' ),
				'5.0',
				esc_html( $GLOBALS['wp_version'] )
			)
		);
	}
	return;
}

/**
 * Get plugin's absolute directory path.
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Get plugin's URL.
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

require __DIR__ . '/lib/register-scripts.php';
require __DIR__ . '/lib/register-blocks.php';
