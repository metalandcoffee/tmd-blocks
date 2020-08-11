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
	title: __( `Multi-Tab Content`, `tmd-blocks` ),
	category: `formatting`,
	icon,
	keywords: [ `mc`, `tabs` ],
	attributes: {
		showTabs: {
			type: 'object',
		},
		header: {
			type: `string`,
			source: `html`,
			selector: `h2`,
		},
		tab1: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:first-child .nav-link`,
		},
		content1: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:first-child p`,
		},	
		tab2: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(2) .nav-link`,
		},
		content2: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(2) p`,
		},
		tab3: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(3) .nav-link`,
		},
		content3: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(3) p`,
		},
		tab4: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(4) .nav-link`,
		},
		content4: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(4) p`,
		},
		tab5: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(5) .nav-link`,
		},
		content5: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(5) p`,
		},
		tab6: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(6) .nav-link`,
		},
		content6: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(6) p`,
		},
		tab7: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(7) .nav-link`,
		},
		content7: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(7) p`,
		},
		tab8: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(8) .nav-link`,
		},
		content8: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(8) p`,
		},
		tab9: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(9) .nav-link`,
		},
		content9: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(9) p`,
		},
		tab10: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(10) .nav-link`,
		},
		content10: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(10) p`,
		},
		tab11: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(11) .nav-link`,
		},
		content11: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(11) p`,
		},
		tab12: {
			type: `string`,
			source: `html`,
			selector: `.nav-item:nth-child(12) .nav-link`,
		},
		content12: {
			type: `string`,
			source: `html`,
			selector: `.tab-content .tab-pane:nth-child(12) p`,
		},
	},
	edit,
	save,
};

// Register our block.
export default registerBlockType( `tmd-blocks/multi-tab`, settings );
