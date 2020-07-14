import { RichText } from '@wordpress/block-editor';

const save = ( props ) => {
	const {
		attributes: {
			showTabs,
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
		},
	} = props;

	return (
		<div>
			<div className="container">
				<div className="multi-tab-title">
					<RichText.Content
						tagName="h2"
						value={ header }
					/>
				</div>
				<div className="multi-tab-content">
					<ul className="nav nav-tabs">
						<li className="nav-item">
							<RichText.Content
								id="tab-one"
								data-toggle="tab"
								href="#one"
								role="tab"
								tagName="a"
								className="nav-link active"
								value={ tab1 }
							/>
						</li>
						<li className="nav-item">
							<RichText.Content
								id="tab-two"
								data-toggle="tab"
								href="#two"
								role="tab"
								tagName="a"
								className="nav-link"
								value={ tab2 }
							/>
						</li>
						{ undefined !== tab3 && `` !== tab3 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-three"
									data-toggle="tab"
									href="#three"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab3 }
								/>
							</li>
						) }
						{ undefined !== tab4 && `` !== tab4 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-four"
									data-toggle="tab"
									href="#four"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab4 }
								/>
							</li>
						) }
						{ undefined !== tab5 && `` !== tab5 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-five"
									data-toggle="tab"
									href="#five"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab5 }
								/>
							</li>
						) }
						{ undefined !== tab6 && `` !== tab6 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-six"
									data-toggle="tab"
									href="#six"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab6 }
								/>
							</li>
						) }
						{ undefined !== tab7 && `` !== tab7 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-seven"
									data-toggle="tab"
									href="#seven"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab7 }
								/>
							</li>
						) }
						{ undefined !== tab8 && `` !== tab8 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-eight"
									data-toggle="tab"
									href="#eight"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab8 }
								/>
							</li>
						) }
						{ undefined !== tab9 && `` !== tab9 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-nine"
									data-toggle="tab"
									href="#nine"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab9 }
								/>
							</li>
						) }
						{ undefined !== tab10 && `` !== tab10 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-ten"
									data-toggle="tab"
									href="#ten"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab10 }
								/>
							</li>
						) }
						{ undefined !== tab11 && `` !== tab11 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-eleven"
									data-toggle="tab"
									href="#eleven"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab11 }
								/>
							</li>
						) }
						{ undefined !== tab12 && `` !== tab12 && (
							<li className="nav-item">
								<RichText.Content
									id="tab-twelve"
									data-toggle="tab"
									href="#twelve"
									role="tab"
									tagName="a"
									className="nav-link"
									value={ tab12 }
								/>
							</li>
						) }			
					</ul>
					<div className="tab-content">
						<div
							id="one"
							role="tabpanel"
							aria-labelledby="tab-one"
							className="tab-pane active"
						>
							<RichText.Content
								tagName="p"
								value={ content1 }
							/>
						</div>
						<div
							id="two"
							role="tabpanel"
							aria-labelledby="tab-two"
							className="tab-pane"
						>
							<RichText.Content
								tagName="p"
								value={ content2 }
							/>
						</div>
						{ undefined !== tab3 && `` !== tab3 && (
							<div
								id="three"
								role="tabpanel"
								aria-labelledby="tab-three"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content3 }
								/>
							</div>
						) }
						{ undefined !== tab4 && `` !== tab4 && (
							<div
								id="four"
								role="tabpanel"
								aria-labelledby="tab-four"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content4 }
								/>
							</div>
						) }
						{ undefined !== tab5 && `` !== tab5 && (
							<div
								id="five"
								role="tabpanel"
								aria-labelledby="tab-five"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content5 }
								/>
							</div>
						) }
						{ undefined !== tab6 && `` !== tab6 && (
							<div
								id="six"
								role="tabpanel"
								aria-labelledby="tab-six"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content6 }
								/>
							</div>
						) }
						{ undefined !== tab7 && `` !== tab7 && (
							<div
								id="seven"
								role="tabpanel"
								aria-labelledby="tab-seven"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content7 }
								/>
							</div>
						) }
						{ undefined !== tab8 && `` !== tab8 && (
							<div
								id="eight"
								role="tabpanel"
								aria-labelledby="tab-eight"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content8 }
								/>
							</div>
						) }
						{ undefined !== tab9 && `` !== tab9 && (
							<div
								id="nine"
								role="tabpanel"
								aria-labelledby="tab-nine"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content9 }
								/>
							</div>
						) }
						{ undefined !== tab10 && `` !== tab10 && (
							<div
								id="ten"
								role="tabpanel"
								aria-labelledby="tab-ten"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content10 }
								/>
							</div>
						) }
						{ undefined !== tab11 && `` !== tab11 && (
							<div
								id="eleven"
								role="tabpanel"
								aria-labelledby="tab-eleven"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content11 }
								/>
							</div>
						) }
						{ undefined !== tab12 && `` !== tab12 && (
							<div
								id="twelve"
								role="tabpanel"
								aria-labelledby="tab-twelve"
								className="tab-pane"
							>
								<RichText.Content
									tagName="p"
									value={ content12 }
								/>
							</div>
						) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default save;
