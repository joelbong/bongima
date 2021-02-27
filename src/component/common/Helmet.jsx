import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageHelmet extends Component {
	render() {
		return (
				<Helmet>
					<title>{this.props.pageTitle}</title>
					<meta name="description" content="alround developer. " />
				</Helmet>
		);
	}
}

export default PageHelmet;
