import React,{useEffect, useRef} from "react";
import "./About.css";
import Skill from "./Skill";
import AboutIllustration from "../../images/plants.svg";
import { motion,useInView,useAnimation} from "framer-motion";

const About = (props, ref) => {

	const illustrationRef = useRef(null)
	
	const skills = [
		{ skillName: "HTML5", skillPercentage: "70%" },
		{ skillName: "JavaScript", skillPercentage: "60%" },
		{ skillName: "React.js", skillPercentage: "60%" },
		{ skillName: "Ṇext.js", skillPercentage: "50%" },
		{ skillName: "Responsive Web Design", skillPercentage: "70%" },
		{ skillName: "CSS", skillPercentage: "70%" },
		{ skillName: "SASS", skillPercentage: "80%" },
		{ skillName: "OOP", skillPercentage: "70%" },
		{ skillName: "Redux.js", skillPercentage: "70%" },
		{ skillName: "Redux Thunk", skillPercentage: "75%" },
		{ skillName: "Figma", skillPercentage: "50%" },
		{ skillName: "TailwindCSS", skillPercentage: "70%" },
		{ skillName: "Bootstrap", skillPercentage: "80%" },
		{ skillName: "Git", skillPercentage: "60%" },
		{ skillName: "GitHub", skillPercentage: "60%" },
		{ skillName: "jQuery", skillPercentage: "60%" },
		{ skillName: "Chart.js", skillPercentage: "85%" },
		{ skillName: "Node.js", skillPercentage: "60%" },
		{ skillName: "Express.js", skillPercentage: "60%" },
		{ skillName: "SQL", skillPercentage: "50%" },
		{ skillName: "REST API", skillPercentage: "60%" },
		{ skillName: "MongoDB", skillPercentage: "65%" },
		{ skillName: "Java", skillPercentage: "60%" },
		{ skillName: "Framer Motion", skillPercentage: "40%" },
	];

	//framer motions
	const buttonVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};
	const illustrationVariants = {
		hidden: { opacity: 0 , y:100  },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const isInView = useInView(illustrationRef, {
		margin: "-25%",
		once: true,
	});
	const animation = useAnimation();

	useEffect(() => {
		console.log(isInView);
		if (isInView) {
				animation.start('visible')	
			}
		// eslint-disable-next-line
	}, [isInView])
	
	
	return (
		<section id="about">
			<div className="about-container">
				<div className="about-header">
					<span className="darkText">{`A`}</span>BOUT
					<span className="darkText">{`M`}</span>E
				</div>
				<div className="about-content">
					<div className="about-gtkm">
						<div className="about-gtkm-title">Get to know me!</div>
						<div className="about-gtkm-content">
							As a passionate <b>Full-stack Web Developer</b> I'm dedicated to
							creating innovative and user-friendly web applications. <br />{" "}
							<br /> With my expertise in <b>React</b> , I've built several
							major projects that have been widely praised for their intuitive
							design and seamless functionality. I'm constantly expanding my
							knowledge and skills, and I'm excited to take on new challenges
							and learn new technologies. <br /> <br /> My goal is to become a
							well-rounded developer who can bring a wide range of expertise to
							any project. In addition to my technical skills, I'm a strong
							communicator and collaborator who thrives in a team environment. I
							believe that the best results come from working together and
							bringing diverse perspectives to the table. <br /> <br /> If
							you're looking for a creative and driven developer who can deliver
							high-quality solutions, I'd love to connect and explore how I can
							contribute to your team or project.
						</div>
						<motion.div
							className="about-gtkm-contact  id-buttons"
							variants={buttonVariants}
							initial="hidden"
							animate='visible'>
							<a href="#contact">Contact Me</a>
						</motion.div>
					</div>
					<div className="about-skills">
						<div className="about-skills-title">My Skills</div>
						<div
							className="skill-set">
							{skills.map((item) => {
								return (
									<Skill
										key={item.skillName}
										skillName={item.skillName}
										skillPercentage={item.skillPercentage}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<motion.div className={`about-illustration`} 
				ref={illustrationRef}
				variants={illustrationVariants}
				initial="hidden"
				animate={animation}
			>
				<img
					src={AboutIllustration}
					alt="home"
				/>
			</motion.div>
		</section>
	);
};
const forwardAbout = React.forwardRef(About);
export default forwardAbout;
