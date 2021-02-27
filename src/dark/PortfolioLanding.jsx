import React from 'react';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';

import Helmet from '../component/common/Helmet';
import TabTwo from '../elements/tab/TabTwo';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';

const SlideList = [
	{
		textPosition: 'text-left',
		category: 'Welcome to Bongima Tech.',
		description: '',
		buttonText: '',
		buttonLink: '',
	},
];
const PortfolioLanding = () => {
	const title = 'About Me';
	const description = `A Full Stack Developer who specializes in Javascript Technologies 
        accross the whole stack (especially MERN). Experience building complete web applications with backend API systems.`;
	return (
		<div className="active-dark">
			<Helmet pageTitle="Bongima Tech - Home" />
			{/* Start Slider Area   */}
			<div id="home" className="fix">
				<div className="slider-wrapper">
					{/* Start Single Slide */}
					{SlideList.map((value, index) => (
						<div
							className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
							key={index}
						>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className={`inner ${value.textPosition}`}>
											{value.category ? <span>{value.category}</span> : ''}
											<h1 className="title">
												Hi, I’m Joël Bongima <br />
												<TextLoop>
													<span> Software Developer.</span>
													<span> Web apps.</span>
													<span> Mobile apps.</span>
												</TextLoop>
											</h1>
											<h2>based in Leuven, Belgium.</h2>
											{value.description ? (
												<p className="description">{value.description}</p>
											) : (
												''
											)}
											{value.buttonText ? (
												<div className="slide-btn">
													<Link
														className="rn-button-style--2 btn-primary-color"
														to={`${value.buttonLink}`}
													>
														{value.buttonText}
													</Link>
												</div>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{/* End Single Slide */}
				</div>
			</div>
			{/* End Slider Area   */}

			{/* Start About Area */}
			<div id="about" className="fix">
				<div className="about-area ptb--120  bg_color--1">
					<div className="about-wrapper">
						<div className="container">
							<div className="row row--35 align-items-center">
								<div className="col-lg-5">
									<div className="thumbnail">
										<img
											className="w-100"
											src="/assets/images/bongima-tech-self.jpg"
											alt="About Images"
										/>
									</div>
								</div>
								<div className="col-lg-7">
									<div className="about-inner inner">
										<div className="section-title">
											<h2 className="title">{title}</h2>
											<p className="description">{description}</p>
										</div>
										<div className="row mt--30">
											<TabTwo tabStyle="tab-style--1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* End About Area */}

			{/* Start Portfolio Area */}
			<div id="project" className="fix">
				<div className="portfolio-area ptb--120 bg_color--5">
					<div className="portfolio-sacousel-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-title text-center service-style--3 mb--30 mb_sm--0">
										<h2 className="title">Featured Projects</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<PortfolioList
									styevariation="text-center mt--40"
									column="col-lg-4 col-md-6 col-sm-6 col-12"
									item="3"
								/>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="view-more-btn mt--60 mt_sm--30 text-center">
										<Link className="rn-button-style--2 btn-solid" to="/projects">
											<span>View More</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Portfolio Area */}

			{/* Start COntact Area */}
			<div id="contact" className="fix">
				<div className="rn-contact-area ptb--120 bg_color--1">
					<ContactThree
						contactImages="/assets/images/bongima-tech-color.jpg"
						contactTitle="Hit me up."
					/>
				</div>
			</div>
			{/* End COntact Area */}
		</div>
	);
};

export default PortfolioLanding;
