import classnames from 'classnames';
import { group } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	Component,
	Fragment,
} from '@wordpress/element';
import {
	RichText,
	MediaPlaceholder,
	URLInput,
} from '@wordpress/block-editor';
import {
	Button,
	Dashicon
} from '@wordpress/components';

export class CardDeck extends Component {
	constructor() {
		super( ...arguments );
		const { cards } = this.props.attributes;
		const newCard = {
			image: ``,
			term: ``,
			title: ``,
			content: ``,
			link: ``,
			active: true
		};
		this.state = {
			cards,
			activeCard: cards.length !== 0 ? cards.length - 1 : 0,
			cardlimit: 3,
			newCard
		};
		this.onChange = this.onChange.bind( this );
		this.addCard = this.addCard.bind( this );
		this.focusCard = this.focusCard.bind( this );
		this.removeCard = this.removeCard.bind( this );
		this.updateCardContent = this.updateCardContent.bind( this );
		this.updateCardTerm = this.updateCardTerm.bind( this );
		this.updateCardTitle = this.updateCardTitle.bind( this );
		this.updateCardImage = this.updateCardImage.bind( this );
		this.updateCardLink = this.updateCardLink.bind( this );
	}

	componentDidMount() {
		let { cards } = this.props.attributes;
		const { newCard } = this.state;
		const { setAttributes } = this.props;
		if ( cards.length === 0 ) {
			setAttributes( { cards: [ newCard ] } );
			this.setState( { cards: [ newCard ] } );
		} else {
			cards = cards.map( ( card, i ) => ( cards.length - 1 === i ? { ...card, active: true } : { ...card, active: false } ) );
			setAttributes( { cards } );
			this.setState( { cards } );
		}
	}

	onChange( prop, val ) {
		const { setAttributes } = this.props;
		const properties = {};
		properties[ prop ] = val;
		setAttributes( properties );
	}

	addCard(e) {
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		const { newCard } = this.state;
		cards = cards.map( card => ( { ...card, active: false } ) );
		cards = [ ...cards, newCard ];
		setAttributes( { cards, activeCard: cards.length - 1 } );
		this.setState( { cards, activeCard: cards.length - 1 } );
	}

	focusCard(index) {
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		const { activeCard } = this.state;
		if ( activeCard === index ) {
			return;
		}
		cards = cards.map( ( card, i ) => {
			return index === i ? { ...card, active: true } : { ...card, active: false };
		} );
		setAttributes( { cards, activeCard: index } );
		this.setState( { cards, activeCard: index } );
	}

	removeCard(index) {
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		cards = cards.filter( ( card, i ) => cards.length === 1 || i !== index );
		cards = cards.map( ( card, i ) => {
			return cards.length - 1 === i ? { ...card, active: true } : { ...card, active: false };
		} );
		setAttributes( { cards, activeCard: cards.length - 1 } );
		this.setState( { cards, activeCard: cards.length - 1 } );
	}

	updateCardContent(index, val) {
		//console.log(`Updating card content ${index+1}.`);
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		cards = cards.map( ( card, i ) => {
			return index === i ? { ...card, content: val } : { ...card };
		} );
		setAttributes( { cards } );
		this.setState( { cards } );
	}

	updateCardTerm(index, val) {
		//console.log(`Updating card caption ${index+1}.`);
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		cards = cards.map( ( card, i ) => {
			return index === i ? { ...card, term: val } : { ...card };
		} );
		setAttributes( { cards } );
		this.setState( { cards } );
	}

	updateCardTitle(index, val) {
		//console.log(`Updating card small caption ${index+1}.`);
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		cards = cards.map( ( card, i ) => {
			return index === i ? { ...card, title: val } : { ...card };
		} );
		setAttributes( { cards } );
		this.setState( { cards } );
	}

	updateCardImage(val) {
		const { setAttributes } = this.props;
		const { activeCard } = this.state;
		//console.log(`Updating card image ${activeCard+1}.`);
		let { cards } = this.props.attributes;
		cards = cards.map( ( card, i ) => {
			return activeCard === i ? { ...card, image: val } : { ...card };
		} );
		setAttributes( { cards } );
		this.setState( { cards } );
	}

	updateCardLink(index, val) {
		console.log(`Updating card link ${index+1}.`, val);
		const { setAttributes } = this.props;
		let { cards } = this.props.attributes;
		cards = cards.map( ( card, i ) => {
			return index === i ? { ...card, link: val } : { ...card };
		} );
		setAttributes( { cards } );
		this.setState( { cards } );
	}

	render() {
		const {
			className,
			isSelected,
		} = this.props;
		const {
			cards,
			cardlimit,
		} = this.state;

		const classNames = classnames( className, {
			'has-media-on-the-right': 'right' === false,
		} );

		return (
			<div className={ classNames }>
				{ isSelected && (
					<>
						<MediaPlaceholder
							onSelect = { ( val ) => this.updateCardImage( val ) }
							allowedTypes = { [ 'image' ] }
							multiple = { false }
							icon={ group }
							labels={ {
								title: 'Card deck',
								instructions: `Edit card below. Click "Add card" button to add an additional card (up to 3). Click "Upload" or "Media Library" on the currently selected card to add an image.`,
							} }
						>
							{ cards.length !== cardlimit && (
								<Button
									className="block-editor-card__add-button"
									onClick={ this.addCard }
									isSecondary
								>
									{ __( 'Add card' ) }
								</Button>
							) }	
							<ul className="card-selector">
								<li><span className="spacer" /></li>
							{ cards.map( (tab, i) => {
							return (
								<li key={`mc-card-deck-btn-${i}`}>
									<button
										className="components-button is-secondary select-card"
										type="button"
										onClick={ () => this.focusCard( i ) }
									>
										{ `Card ${i+1}`}
									</button>
									<span
										className="delete-card"
										onClick={ () => this.removeCard( i ) }
									>
										<Dashicon icon="no-alt" />
									</span>
								</li>
							);
							} ) }
							</ul>
						</MediaPlaceholder>
					</>
				) }
				<div className="card-deck">
				{ cards.map( ( card, i ) => {
					return (
						<div onClick={ () => this.focusCard( i ) } className={ isSelected && card.active ? `card active` : `card` } key={`mc-card-deck-${i}`}>
							<div className="card-img-container">
							{ `` !== card.image ? (
								<img className="card-img-top" src={ card.image.url } alt="" scale="0" />
							) : `Add image...` }
							</div>
							<div className="card-body">
								<RichText
									tagName="div"
									className="card-term"
									
									value={ card.term }
									onChange={ ( val ) => this.updateCardTerm( i, val ) }
									placeholder={ __( 'Add term...', 'mc-inc-blocks' ) }
									keepPlaceholderOnFocus={ true }
								/>
								<RichText
									tagName="h3"
									className="card-title"
									value={ card.title }
									onChange={ ( val ) => this.updateCardTitle( i, val ) }
									placeholder={ __( 'Add title...', 'mc-inc-blocks' ) }
									keepPlaceholderOnFocus={ true }
								/>
								<RichText
									tagName="div"
									className="card-text"
									value={ card.content }
									onChange={ ( val ) => this.updateCardContent( i, val ) }
									placeholder={ __( 'Add content...', 'mc-inc-blocks' ) }
									keepPlaceholderOnFocus={ true }
								/>
								{ isSelected && (
									<URLInput
										id="input-control__card-link"
										value={ card.link }
										onChange={ ( val ) => this.updateCardLink( i, val ) }
										disableSuggestions={ ! isSelected }
										autoFocus={ false }
										hasBorder
									/>
								) }
							</div>
						</div>
					)
				} ) }
				</div>
			</div>
		);
	}
}
