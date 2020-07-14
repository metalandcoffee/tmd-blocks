import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

const save = ( props ) => {
	const {
		attributes: {
			backgroundColor,
			textColor,
			cards
		},
		className,
	} = props;
	const classNames = classnames( className, {
		'has-media-on-the-right': 'right' === false,
	} );

	return (
		<div
			className={ classNames }
			style={ {
				backgroundColor,
				color: textColor,
			} }
		>
			<div className="card-deck site-loop">
			{ cards.map( ( card, i ) => {
				return (
					<div className="card" key={`mc-card-deck-${i}`}>
						<div className="card-img-container">
							<a href={ card.link }>
								{ `` !== card.image && (
									<img className="card-img-top" src={ card.image.url } alt="" scale="0" />
								) }
							</a>
						</div>
						<div className="card-body">
							<div className="card-term" dangerouslySetInnerHTML={ { __html: card.term } } />
							<a href={ card.link }>
								<h3 className="card-title" dangerouslySetInnerHTML={ { __html: card.title } } />
							</a>
							<div className="card-text" dangerouslySetInnerHTML={ { __html: card.content } } />
						</div>
					</div>
				);
			} ) }
			</div>
		</div>
	);
};

export default save;
