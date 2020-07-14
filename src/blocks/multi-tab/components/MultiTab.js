import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import {
	Component,
} from '@wordpress/element';
import {
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Dashicon,
	Toolbar,
	Tooltip,
	Button
} from '@wordpress/components';

export class MultiTab extends Component {

	// Maxium of 12 tabs are allowed.
	constructor() {
		super( ...arguments );
		const { showTabs } = this.props.attributes;
		this.state = {
			isTabOne: true,
			isTabTwo: false,
			isTabThree: false,
			isTabFour: false,
			isTabFive: false,
			isTabSix: false,
			isTabSeven: false,
			isTabEight: false,
			isTabNine: false,
			isTabTen: false,
			isTabEleven: false,
			isTabTwelve: false,
			showTabs,
		};
		this.onChange = this.onChange.bind( this );
		this.onFocus = this.onFocus.bind( this );
		this.addTab = this.addTab.bind( this );
		this.removeTab = this.removeTab.bind( this );
	}

	componentDidMount() {
		const { setAttributes } = this.props;
		const { showTabs } = this.props.attributes;
		if ( undefined === showTabs ) {
			const showTabs = {
				tabThree: false,
				tabFour: false,
				tabFive: false,
				tabSix: false,
				tabSeven: false,
				tabEight: false,
				tabNine: false,
				tabTen: false,
				tabEleven: false,
				tabTwelve: false,
			};
			setAttributes( { showTabs } );
			this.setState( { showTabs } );
		}
	}

	onChange( prop, val ) {
		const { setAttributes } = this.props;
		const properties = {};
		properties[ prop ] = val;
		setAttributes( properties );
	}

	onFocus( prop ) {
		//console.log(prop, `true`);
		const properties = {
			isTabOne: false,
			isTabTwo: false,
			isTabThree: false,
			isTabFour: false,
			isTabFive: false,
			isTabSix: false,
			isTabSeven: false,
			isTabEight: false,
			isTabNine: false,
			isTabTen: false,
			isTabEleven: false,
			isTabTwelve: false,
		};
		properties[ prop ] = true;
		this.setState( properties );
	}

	addTab() {
		let tabAdded = false;
		const { setAttributes } = this.props;
		const { showTabs } = this.props.attributes;
		for (const showTab in showTabs) {
			if ( showTabs[showTab] === false ) {
				showTabs[showTab] = true;
				tabAdded = true;
				break;
			}
		}

		if ( tabAdded ) {
			setAttributes( { showTabs } );
			this.setState( { showTabs } );
		}	
	}

	removeTab() {
		const attrMap = {
			tabThree: [ `tab3`, `content3` ],
			tabFour: [ `tab4`, `content4` ],
			tabFive: [ `tab5`, `content5` ],
			tabSix: [ `tab6`, `content6` ],
			tabSeven: [ `tab7`, `content7` ],
			tabEight: [ `tab8`, `content8` ],
			tabNine: [ `tab9`, `content9` ],
			tabTen: [ `tab10`, `content10` ],
			tabEleven: [ `tab11`, `content11` ],
			tabTwelve: [ `tab12`, `content12` ],
		};
		const { setAttributes } = this.props;
		const { showTabs } = this.props.attributes;
		const showTabsDescArr = Object.keys(showTabs).reverse();
		for (const showTab of showTabsDescArr) {
			if ( showTabs[showTab] === true ) {
				showTabs[showTab] = false;
				const properties = {};
				for ( const attr of attrMap[showTab] ) {
					properties[ attr ] = ``;
				}
				setAttributes( properties );
				break;
			}
		}

		setAttributes( { showTabs } );
		this.setState( { showTabs } );
	}

	render() {
		const {
			className,
		} = this.props;

		const {
			header,
			tab1,
			content1,
			tab2,
			content2,
			tab3,
			content3,
			tab4,
			content4,
			tab5,
			content5,
			tab6,
			content6,
			tab7,
			content7,
			tab8,
			content8,
			tab9,
			content9,
			tab10,
			content10,
			tab11,
			content11,
			tab12,
			content12,
			showTabs,
		} = this.props.attributes;

		const {
			isTabOne,
			isTabTwo,
			isTabThree,
			isTabFour,
			isTabFive,
			isTabSix,
			isTabSeven,
			isTabEight,
			isTabNine,
			isTabTen,
			isTabEleven,
			isTabTwelve,
		} = this.state;

		const tabOneClasses = classnames(
			`nav-link`,
			{ 'active': isTabOne === true },
		);
		const tabTwoClasses = classnames(
			`nav-link`,
			{ 'active': isTabTwo === true },
		);
		const tabThreeClasses = classnames(
			`nav-link`,
			{ 'active': isTabThree === true },
		);
		const tabFourClasses = classnames(
			`nav-link`,
			{ 'active': isTabFour === true },
		);
		const tabFiveClasses = classnames(
			`nav-link`,
			{ 'active': isTabFive === true },
		);
		const tabSixClasses = classnames(
			`nav-link`,
			{ 'active': isTabSix === true },
		);
		const tabSevenClasses = classnames(
			`nav-link`,
			{ 'active': isTabSeven === true },
		);
		const tabEightClasses = classnames(
			`nav-link`,
			{ 'active': isTabEight === true },
		);
		const tabNineClasses = classnames(
			`nav-link`,
			{ 'active': isTabNine === true },
		);
		const tabTenClasses = classnames(
			`nav-link`,
			{ 'active': isTabTen === true },
		);
		const tabElevenClasses = classnames(
			`nav-link`,
			{ 'active': isTabEleven === true },
		);
		const tabTwelveClasses = classnames(
			`nav-link`,
			{ 'active': isTabTwelve === true },
		);

		if ( undefined === showTabs ) {
			return null;
		}

		return (
			<div className={ className }>
				<BlockControls key="custom-controls">
					<Toolbar>
						<Tooltip text={ __( 'Add a tab.', 'mc-blocks' )  }>
							<Button onClick={ this.addTab }
							>
								<Dashicon icon="plus-alt" />
							</Button>
						</Tooltip>
					</Toolbar>
				</BlockControls>
				<div className="multi-tab-title">
					<RichText
						tagName="h2"
						className="header"
						value={ header }
						onChange={ ( val ) => this.onChange( `header`, val ) }
						placeholder={ __( `Add header...`, `mc-blocks` ) }
						keepPlaceholderOnFocus={ true }
					/>
				</div>
				<div className="multi-tab-content">
					{ showTabs.tabThree && (
							<span
								className="delete-tab"
								onClick={ this.removeTab }
							>
								<Dashicon icon="no-alt" />
							</span>
					) }
					<ul className="nav nav-tabs">
						<li
						className="nav-item"
						onFocus={ () => this.onFocus(`isTabOne`) }
						>
							<RichText
								tagName="a"
								className={ tabOneClasses }
								value={ tab1 }
								onChange={ ( val ) => this.onChange( `tab1`, val ) }
								placeholder={ __( `Add tab...`, `mc-blocks` ) }
								keepPlaceholderOnFocus={ true }
							/>
						</li>
						<li
							className="nav-item"
							onFocus={ () => this.onFocus(`isTabTwo`) }
						>
							<RichText
								tagName="a"
								className={ tabTwoClasses }
								value={ tab2 }
								onChange={ ( val ) => this.onChange( `tab2`, val ) }
								placeholder={ __( `Add tab...`, `mc-blocks` ) }
								keepPlaceholderOnFocus={ true }
							/>
						</li>
						{ showTabs.tabThree && ( 
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabThree`) }
							>
								<RichText
									tagName="a"
									className={ tabThreeClasses }
									value={ tab3 }
									onChange={ ( val ) => this.onChange( `tab3`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabFour && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabFour`) }
							>
								<RichText
									tagName="a"
									className={ tabFourClasses }
									value={ tab4 }
									onChange={ ( val ) => this.onChange( `tab4`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabFive && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabFive`) }
							>
								<RichText
									tagName="a"
									className={ tabFiveClasses }
									value={ tab5 }
									onChange={ ( val ) => this.onChange( `tab5`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabSix && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabSix`) }
							>
								<RichText
									tagName="a"
									className={ tabSixClasses }
									value={ tab6 }
									onChange={ ( val ) => this.onChange( `tab6`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabSeven && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabSeven`) }
							>
								<RichText
									tagName="a"
									className={ tabSevenClasses }
									value={ tab7 }
									onChange={ ( val ) => this.onChange( `tab7`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabEight && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabEight`) }
							>
								<RichText
									tagName="a"
									className={ tabEightClasses }
									value={ tab8 }
									onChange={ ( val ) => this.onChange( `tab8`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabNine && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabNine`) }
							>
								<RichText
									tagName="a"
									className={ tabNineClasses }
									value={ tab9 }
									onChange={ ( val ) => this.onChange( `tab9`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabTen && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabTen`) }
							>
								<RichText
									tagName="a"
									className={ tabTenClasses }
									value={ tab10 }
									onChange={ ( val ) => this.onChange( `tab10`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabEleven && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabEleven`) }
							>
								<RichText
									tagName="a"
									className={ tabElevenClasses }
									value={ tab11 }
									onChange={ ( val ) => this.onChange( `tab11`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
						{ showTabs.tabTwelve && (
							<li
								className="nav-item"
								onFocus={ () => this.onFocus(`isTabTwelve`) }
							>
								<RichText
									tagName="a"
									className={ tabTwelveClasses }
									value={ tab12 }
									onChange={ ( val ) => this.onChange( `tab12`, val ) }
									placeholder={ __( `Add tab...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</li>
						) }
					</ul>
					<div className="tab-content">
						{ isTabOne && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content1 }
									onChange={ ( val ) => this.onChange( `content1`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ isTabTwo && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content2 }
									onChange={ ( val ) => this.onChange( `content2`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabThree && isTabThree && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content3 }
									onChange={ ( val ) => this.onChange( `content3`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabFour && isTabFour && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content4 }
									onChange={ ( val ) => this.onChange( `content4`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabFive && isTabFive && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content5 }
									onChange={ ( val ) => this.onChange( `content5`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabSix && isTabSix && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content6 }
									onChange={ ( val ) => this.onChange( `content6`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabSeven && isTabSeven && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content7 }
									onChange={ ( val ) => this.onChange( `content7`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabEight && isTabEight && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content8 }
									onChange={ ( val ) => this.onChange( `content8`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabNine && isTabNine && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content9 }
									onChange={ ( val ) => this.onChange( `content9`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabTen && isTabTen && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content10 }
									onChange={ ( val ) => this.onChange( `content10`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabEleven && isTabEleven && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content11 }
									onChange={ ( val ) => this.onChange( `content11`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
						{ showTabs.tabTwelve && isTabTwelve && (
							<div className="tab-pane">
								<RichText
									tagName="p"
									value={ content12 }
									onChange={ ( val ) => this.onChange( `content12`, val ) }
									placeholder={ __( `Add content...`, `mc-blocks` ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						) }
					</div>
				</div>
			</div>
		);
	}
}
