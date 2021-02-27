import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';

const SocialShare = [
	{
		Social: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/in/andrebongima/',
	},
	{ Social: <FaTwitter />, link: 'https://twitter.com/4ndr380ng' },
];
class HeaderThree extends Component {
	constructor(props) {
		super(props);
		this.menuTrigger = this.menuTrigger.bind(this);
		this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
		this.stickyHeader = this.stickyHeader.bind(this);
		this.state = {
			logo: 'white-text',
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.stickyHeader);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.stickyHeader);
	}

	menuTrigger() {
		document.querySelector('.header-wrapper').classList.toggle('menu-open');
	}

	CLoseMenuTrigger() {
		document.querySelector('.header-wrapper').classList.remove('menu-open');
	}

	stickyHeader() {
		var value = window.scrollY;
		if (value > 100) {
			document.querySelector('.header--fixed').classList.add('sticky');
			this.setState({ logo: 'no-text' });
		} else {
			document.querySelector('.header--fixed').classList.remove('sticky');
			this.setState({ logo: 'white-text' });
		}
	}

	render() {
		var elements = document.querySelectorAll('.has-droupdown > a');
		for (var i in elements) {
			if (elements.hasOwnProperty(i)) {
				elements[i].onclick = function () {
					this.parentElement
						.querySelector('.submenu')
						.classList.toggle('active');
					this.classList.toggle('open');
				};
			}
		}
		const { color = 'default-color' } = this.props;
		const { logo } = this.state;
		let logoUrl;
		if (logo === 'black-text') {
			logoUrl = (
				<img
					src="/assets/images/logo/logo-black-text-cropped-transparent.png"
					width={100}
					height={40}
					alt="Bongima Tech logo black text"
				/>
			);
		} else if (logo === 'white-text') {
			logoUrl = (
				<img
					src="/assets/images/logo/logo-white-text-cropped-transparent.png"
					width={100}
					height={40}
					alt="Bongima Tech logo white text"
				/>
			);
		} else if (logo === 'no-text') {
			logoUrl = (
				<img
					src="/assets/images/logo/logo-no-text-cropped-transparent.png"
					width={50}
					height={50}
					alt="Bongima Tech logo no text"
				/>
			);
		} else {
			logoUrl = (
				<img
					src="/assets/images/logo/logo-no-text-cropped-transparent.png"
					width={50}
					height={50}
					alt="Bongima Tech logo no text"
				/>
			);
		}

		return (
			<header className={`header-area header-style-two header--fixed ${color}`}>
				<div className="header-wrapper">
					<div className="header-left d-flex align-items-center">
						<div className="logo">
							<HashLink smooth to="/#home">
								{logoUrl}
							</HashLink>
						</div>
						<nav className="mainmenunav d-lg-block ml--50">
							<Scrollspy
								className="mainmenu"
								items={['home', 'about', 'project', 'contact']}
								currentClassName="is-current"
								offset={-200}
							>
								<li>
									<HashLink smooth to="/#home">
										Home
									</HashLink>
								</li>
								<li>
									<HashLink smooth to="/#about">
										About
									</HashLink>
								</li>
								<li>
									<HashLink smooth to="/#project">
										Projects
									</HashLink>
								</li>
								<li>
									<HashLink smooth to="/#contact">
										Contact
									</HashLink>
								</li>
							</Scrollspy>
						</nav>
					</div>
					<div className="header-right">
						<div className="social-share-inner">
							<ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
								{SocialShare.map((val, i) => (
									<li key={i}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={`${val.link}`}
										>
											{val.Social}
										</a>
									</li>
								))}
							</ul>
						</div>
						{/* Start Humberger Menu  */}
						<div className="humberger-menu d-block d-lg-none pl--20">
							<span
								onClick={this.menuTrigger}
								className="menutrigger text-white"
							>
								<FiMenu />
							</span>
						</div>
						{/* End Humberger Menu  */}
						<div className="close-menu d-block d-lg-none">
							<span onClick={this.CLoseMenuTrigger} className="closeTrigger">
								<FiX />
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default HeaderThree;
