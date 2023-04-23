import React from "react";
import "./About.css";
import Skill from "./Skill";
import AboutIllustration from "../../images/Blooming-pana1.svg";

const About = (props, ref) => {
	const { aboutIllVisible } = props;
	const skills = [
		"HTML5",
		"React.js",
		"JavaScript",
		"Redux.js",
		"OOP",
		"Redux Thunk",
		"Responsive Web Design",
		"CSS",
		"SASS",
		"Figma",
		"TailwindCSS",
		"Bootstrap",
		"Git",
		"GitHub",
		"jQuery",
		"Chart.js",
		"Node.js",
		"Express.js",
		"SQL",
		"REST API",
		"MongoDB",
		"Java",
	];

	return (
		<section id="about">
			<div className="about-container">
				<div className="about-header">ABOUT ME</div>
				<div className="about-content">
					<div className="about-gtkm">
						<div className="about-gtkm-title">Get to know me!</div>
						<div className="about-gtkm-content">
							I'm a <b>Frontend Web Developer</b> building the Front-end of
							Websites and Web Applications that leads to the success of the
							overall product. Check out some of my work in the <b> Projects</b>{" "}
							section. <br /> <br /> I also like sharing content related to the
							stuff that I have learned over the years in{" "}
							<b> Web Development</b> so it can help other people of the Dev
							Community. Feel free to Connect or Follow me on my Linkedin where
							I post useful content related to Web Development and Programming.{" "}
							<br /> <br /> I'm open to <b>Job</b> opportunities where I can
							contribute, learn and grow. If you have a good opportunity that
							matches my skills and experience then don't hesitate to{" "}
							<b>contact</b> me.
						</div>
						<div className="about-gtkm-contact">
							<a href="#contact">Contact Me</a>
						</div>
					</div>
					<div className="about-skills">
						<div className="about-skills-title">My Skills</div>
						<div className="skill-set">
							{skills.map((item) => {
								return <Skill key={item} skill={item} />;
							})}
						</div>
					</div>
				</div>
				<div className={`about-illustration`} ref={ref}>
					<img
						className={`${aboutIllVisible? 'aboutIllVisible':'hide'}`}
						src={AboutIllustration}
						alt="home"
					/>
				</div>
			</div>
		</section>
	);
};
const forwardAbout = React.forwardRef(About);
export default forwardAbout;
