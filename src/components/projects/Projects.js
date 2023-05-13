import React from "react";
import "./Projects.css";
import crypto from "../../images/crypto.jpg";
import portfolio from "../../images/Portfolio.png";
import inotepad from "../../images/inotepad.png";
import chatApp from "../../images/chatApp.png";
import cssChallenges from "../../images/cssChallenges.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			projectName: "Crypto Dashboard",
			aboutProject: "an app to show real time cryptocurrency data ",
			description: "",
			imgURL: crypto,
			github: "https://github.com/nikhil-223/cryptocurrency-project",
			projectURL: "https://crypto-currency-board.netlify.app",
		},
		{
			projectName: "Talkr",
			aboutProject: "a chatting app",
			description: "In progress",
			imgURL: chatApp,
			github: "https://github.com/nikhil-223/chatting-app",
			projectURL: "https://chatttingapp.netlify.app",
		},
		{
			projectName: "Noted",
			aboutProject: "a note making app",
			description: "In progress",
			imgURL: inotepad,
			github: "https://github.com/nikhil-223/inotepad",
			projectURL: "https://inotepad.netlify.app",
		},
		{
			projectName: "Portfolio",
			aboutProject: "My personal portfolio website",
			description: "",
			imgURL: portfolio,
			github: "https://github.com/nikhil-223/myPortfolio",
			projectURL: "https://nikhilshekhawat.netlify.app",
		},
		{
			projectName: "CSS Challenges",
			aboutProject: "some css challenges",
			description: "In progress",
			imgURL: cssChallenges,
			github: "https://github.com/nikhil-223/css-challenge-react",
			projectURL: "https://css-challengesbynikhil.netlify.app/",
		},
	];

	//intersection observer
		const cards= document.querySelectorAll('.project')
		const observer= new IntersectionObserver(entries =>{
			entries.forEach((entry,index)=>{
				entry.target.style.transitionDelay=`${index/10}s`
				if(entry.isIntersecting)
				entry.target.classList.add('visibleUp')
			})
		},{
			threshold:0.1
		})
		cards.forEach(card=>{
			observer.observe(card)
		})

	return (
		<section id="projects">
			<div className="projects-header">
				<span>
					<span className="darkText">{`P`}</span>ROJECTS</span>
			</div>
			<div className="project-list">
				{projects.map((item) => {
					return (
						<Project
							key={item.projectName}
							projectName={item.projectName}
							imgURL={item.imgURL}
							projectURL={item.projectURL}
							projectDesc={item.description}
							aboutProject={item.aboutProject}
							github={item.github}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
