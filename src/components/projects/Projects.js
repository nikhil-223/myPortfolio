import React from "react";
import "./Projects.css";
import crypto from "../../images/crypto.jpg";
import portfolio from "../../images/Portfolio.png";
import inotepad from "../../images/inotepad.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			projectName: "Crypto Dashboard",
			description: "",
			imgURL: crypto,
			github: "https://github.com/nikhil-223/cryptocurrency-project",
			projectURL: "https://crypto-currency-board.netlify.app/",
		},
		{
			projectName: "Portfolio",
			description: "",
			imgURL: portfolio,
			github: "https://github.com/nikhil-223/myPortfolio",
			projectURL: "https://nikhilshekhawat.netlify.app/",
		},
		{
			projectName: "My Notepad",
			description: "In progress",
			imgURL: inotepad,
			github: "https://github.com/nikhil-223/inotepad",
			projectURL: "https://inotepad.netlify.app/",
		},
	];
	return (
		<section id="projects">
			<div className="projects-header">
				<span>PROJECTS</span>
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
							github={item.github}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
