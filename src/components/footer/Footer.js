import React from "react";
import "./Footer.css";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<div id="footer">
			<div className="footer-container">
				<div className="about-footer">
					<div className="about-name">
						<h3>Nikhil Shekhawat</h3>
						<span>
							I specialize in creating dynamic and interactive websites
							utilizing a range of programming languages and frameworks
						</span>
					</div>
					<div>
						<div className="social-links">
							<a
								href="https://www.linkedin.com/in/nikhil-shekhawat-986385179/"
								target="blank">
								<TfiLinkedin />
							</a>
							<a
								href="https://www.linkedin.com/in/nikhil-shekhawat-986385179/"
								target="blank">
								<SiGithub />
							</a>
							<a href="https://twitter.com/Nikhil70035706" target="blank">
								<BsTwitter />
							</a>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="line"></div>
					<div className="copyright-content">
						© Copyright 2023. Made by Nikhil Shekhawat
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
