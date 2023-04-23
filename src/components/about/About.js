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
							As a  passionate <b>Full-stack Web Developer</b> I'm dedicated to creating
							innovative and user-friendly web applications. <br /> With my expertise
							in <b>React</b> , I've built several major projects that have been widely
							praised for their intuitive design and seamless functionality. I'm
							constantly expanding my knowledge and skills, and I'm excited to
							take on new challenges and learn new technologies. <br /> My goal is to
							become a well-rounded developer who can bring a wide range of
							expertise to any project. In addition to my technical skills, I'm
							a strong communicator and collaborator who thrives in a team
							environment. I believe that the best results come from working
							together and bringing diverse perspectives to the table. <br /> If you're
							looking for a creative and driven developer who can deliver
							high-quality solutions, I'd love to connect and explore how I can
							contribute to your team or project.
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
			</div>
			<div className={`about-illustration`} ref={ref}>
				<img
					className={`${aboutIllVisible ? "aboutIllVisible" : "hide"}`}
					src={AboutIllustration}
					alt="home"
				/>
			</div>
		</section>
	);
};
const forwardAbout = React.forwardRef(About);
export default forwardAbout;
