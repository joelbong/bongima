// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

// Create Import File
import './index.scss';

// Header and footer
import HeaderThree from './component/header/HeaderThree';
import FooterTwo from './component/footer/FooterTwo';

// Pages
import DarkPortfolioLanding from './dark/PortfolioLanding';
import error404 from './elements/error404';
import Portfolio from './elements/Portfolio';
import PortfolioDetails from './elements/PortfolioDetails';



import * as serviceWorker from './serviceWorker';

class Root extends Component {
	render() {
		return (
			<BrowserRouter basename={'/'}>
				<div className="active-dark">
					<HeaderThree homeLink="/#home" color="color-black" />
					<Switch>
                        <Route
                            exact
							path={`${process.env.PUBLIC_URL}/projects`}
							component={Portfolio}
						/>
                        <Route
                            exact
							path={`${process.env.PUBLIC_URL}/projects/:name`}
							component={PortfolioDetails}
						/>
						<Route
                            exact
							path={`${process.env.PUBLIC_URL}/404`}
							component={error404}
						/>
                        <Route
							exact
							path={`${process.env.PUBLIC_URL}/`}
							component={DarkPortfolioLanding}
						/>
						<Route path={`${process.env.PUBLIC_URL}`} component={error404} />
					</Switch>
					<FooterTwo />
					{/* Start Back To Top */}
					<div className="backto-top">
						<ScrollToTop showUnder={160}>
							<FiChevronUp />
						</ScrollToTop>
					</div>
					{/* End Back To Top */}
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
