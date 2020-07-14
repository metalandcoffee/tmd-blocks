const save = ( props ) => {
	const {
		attributes: {
			backgroundColor,
			textColor,
			cards
		},
		className,
	} = props;

	return (
		<div
			className={ className }
			style={ {
				backgroundColor,
				color: textColor,
			} }
		>
			<div className="mc-card-deck">
			{ cards.map( ( card, i ) => {
				return (
					<div className="mc-card" key={`mc-card-deck-${i}`}>
						<div className="mc-card__img-container">
							<a href={ card.link }>
								{ `` !== card.image && (
									<img src={ card.image.url } alt="" />
								) }
							</a>
						</div>
						<div className="mc-card__body">
							<div className="mc-card__category" dangerouslySetInnerHTML={ { __html: card.term } } />
							<a href={ card.link }>
								<h3 className="mc-card__title" dangerouslySetInnerHTML={ { __html: card.title } } />
							</a>
							<div className="mc-card__content" dangerouslySetInnerHTML={ { __html: card.content } } />
						</div>
					</div>
				);
			} ) }
			</div>
		</div>
	);
};

export default save;
