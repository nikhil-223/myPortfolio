import React, { forwardRef } from 'react'
import './Home.scss'
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";

const Home = (props,ref) => {
	const {visible}=props;
  return (
		<section id="home" className="home" ref={ref}>
			<div className="home-container">
				<div className="links">
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
				<div className={`profile-info ${visible ? "visibletext" : "hidden"}`}>
					<div>
						<span>Hey, I'm Nikhil Shekhawat</span>
					</div>
					<div>
						<span>Full-Stack</span>
						<span>Developer</span>
					</div>
					<div>
						<span>
							I have worked on MERN stack and created various projects on
							React-Redux{" "}
						</span>
					</div>
					<div className="project-button">
						<a href="#projects">Projects</a>
					</div>
					<div className="scroll-indicator">
						<div className="scroll-inner"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
const forwardHome = forwardRef(Home)
export default forwardHome;