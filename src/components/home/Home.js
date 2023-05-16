import React, { forwardRef } from "react";
import "./Home.scss";
import HomeIllustration from "../../images/Home.svg";
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = (props, ref) => {
	const { textVisible, aboutVisible } = props;

	// framer motion
	let { scrollYProgress } = useScroll();
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const infoVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
				
			},
		},
	};
	const infoChildVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};

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
				<motion.div
					className={`profile-info `}
					variants={infoVariants}
					initial="hidden"
					animate="visible"
					style={{ y }}>
					<div>
						<span>
							{" "}
							<motion.h6 variants={infoChildVariants}>Hey, I'm </motion.h6>{" "}
							<motion.h3 variants={infoChildVariants}>
								Nikhil Shekhawat
							</motion.h3>{" "}
						</span>
					</div>
					<motion.div variants={infoChildVariants}>
						<span>Full-Stack</span>
						<span>Developer</span>
					</motion.div>
					<motion.div variants={infoChildVariants}>
						<span>
							I specialize in creating dynamic and interactive websites
							utilizing a range of programming languages and frameworks
						</span>
					</motion.div>
					<div className="project-button id-buttons">
						<a href="#projects">Projects</a>
					</div>
				</motion.div>
				<div
					className={`scroll-indicator ${
						aboutVisible ? "hideScroll" : "visibleScroll"
					} `}>
					<div className="scroll-inner"></div>
				</div>
				<div className={`home-illustration`}>
					<img src={HomeIllustration} alt="home" />
				</div>
			</div>
		</section>
	);
};
const forwardHome = forwardRef(Home);
export default forwardHome;
