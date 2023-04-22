import React from "react";
import "./Projects.css";
import crypto from "../../images/crypto.jpg";
import portfolio from "../../images/Portfolio.png";
import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			projectName: "CryptoCurrency",
			imgURL: crypto,
			projectURL: "https://crypto-currency-board.netlify.app/",
		},
		{
			projectName: "Portfolio",
			imgURL: portfolio,
			projectURL: "https://nikhilshekhawat.netlify.app/",
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
						/>
					);
				})}
			</div>
			
		</section>
	);
};

export default Projects;
