/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

// Block settings.
const settings = {
	title: __( 'Card Deck', 'mc-blocks' ),
	category: 'formatting',
	icon: 'admin-page',
	keywords: [ 'mc', 'card', 'deck' ],
	attributes: {
		cards: {
			type: 'array',
			default: [],
		},
	},
	edit,
	save,
};

// Register our block.
export default registerBlockType( 'mc-blocks/card-deck', settings );
