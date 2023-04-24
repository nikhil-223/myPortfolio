import React, { forwardRef } from "react";
import "./Home.scss";
import HomeIllustration from "../../images/Home.svg";
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";

const Home = (props, ref) => {
	const { textVisible, aboutVisible } = props;
	return (
		<section id="home" className="home" ref={ref}>
			<div className="home-container">
				<div className={`links ${textVisible ? "visible" : "hidden"}`}>
					<div className="link-box">
						<a
							href="https://www.linkedin.com/in/nikhil-shekhawat-986385179"
							target={"_blank"}
							rel="noreferrer">
							<ImLinkedin />
						</a>
					</div>
					<div className="link-box">
						<a
							href="https://github.com/nikhil-223"
							target={"_blank"}
							rel="noreferrer">
							<ImGithub />
						</a>
					</div>
					<div className="link-box">
						<a
							href="https://twitter.com/Nikhil70035706"
							target={"_blank"}
							rel="noreferrer">
							<ImTwitter />
						</a>
					</div>
				</div>
				<div className={`profile-info ${textVisible ? "visible" : "hidden"}`}>
					<div>
						<span>
							{" "}
							<h6>Hey, I'm </h6> <h3>Nikhil Shekhawat</h3>{" "}
						</span>
					</div>
					<div>
						<span>Full-Stack</span>
						<span>Developer</span>
					</div>
					<div>
						<span>
							I specialize in creating dynamic and interactive websites utilizing
							a range of programming languages and frameworks 
						</span>
					</div>
					<div className="project-button">
						<a href="#projects">Projects</a>
					</div>
				</div>
				<div
					className={`scroll-indicator ${
						aboutVisible ? "hideScroll" : "visibleScroll"
					} `}>
					<div className="scroll-inner"></div>
				</div>
				<div
					className={`home-illustration ${
						textVisible ? "visibleRight" : "hidden"
					}`}>
					<img src={HomeIllustration} alt="home" />
				</div>
			</div>
		</section>
	);
};
const forwardHome = forwardRef(Home);
export default forwardHome;
