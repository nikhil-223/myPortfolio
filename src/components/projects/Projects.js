import React from "react";
import "./Projects.css";
import crypto from "../../images/crypto.jpg";
import portfolio from "../../images/Portfolio.png";
import inotepad from "../../images/inotepad.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			projectName: "CryptoCurrency",
			description: "",
			imgURL: crypto,
			projectURL: "https://crypto-currency-board.netlify.app/",
		},
		{
			projectName: "Portfolio",
			description: "",
			imgURL: portfolio,
			projectURL: "https://nikhilshekhawat.netlify.app/",
		},
		{
			projectName: "My Notepad",
			description: "In progress",
			imgURL: inotepad,
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
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
