import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialShare = [
	{
		Social: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/in/andrebongima/',
	},
	{ Social: <FaTwitter />, link: 'https://twitter.com/4ndr380ng' },
];

const FooterTwo = () => {
	return (
		<div
			className="footer-style-2 ptb--30 bg_image bg_image--1"
			data-black-overlay="6"
		>
			<div className="wrapper plr--50 plr_sm--20">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-4 col-md-6 col-sm-6 col-12">
						<div className="inner">
							<div className="logo text-center text-sm-left mb_sm--20">
								<HashLink smooth to="/#home">
									<img
										src="/assets/images/logo/logo-white-text-cropped-transparent.png"
										width={100}
										height={40}
										alt="Bongima Tech logo white text"
									/>
								</HashLink>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6 col-12">
						<div className="inner text-center">
							<ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
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
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12 col-12">
						<div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
							<div className="text">
								<p>
									Copyright © {new Date().getFullYear()} Bongima Tech. All
									Rights Reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FooterTwo;
