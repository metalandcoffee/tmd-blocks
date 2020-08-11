/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import icon from './icon';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

// Block settings.
const settings = {
	title: __( 'Card Deck', 'tmd-blocks' ),
	category: 'formatting',
	icon,
	keywords: [ 'mc', 'card', 'deck' ],
	attributes: {
		cards: {
			type: 'array',
			default: [],
		},
		backgroundColor: {
			type: 'string',
			default: '#262626',
		},
		textColor: {
			type: 'string',
			default: '#fff',
		},
	},
	edit,
	save,
};

// Register our block.
export default registerBlockType( 'tmd-blocks/card-deck', settings );
