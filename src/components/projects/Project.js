import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const Project = (props) => {
	const { projectName, imgURL, projectURL,projectDesc,github ,aboutProject} = props;
	return (
		<div className={`project ${projectName}`}>
			<a href={projectURL} target="blank">
				<img src={imgURL} alt={projectName} />
			</a>

			<div className="project-details">
				<div className="project-nameDesc">
					<span>{projectName}</span>
					<span className="aboutProject">{aboutProject}</span>
					{projectDesc!=="" && <span className="projectDesc">{projectDesc}</span>}
				</div>
				<div className="project-read-more">
					<a href={projectURL} target="blank">
						<HiExternalLink />
					</a>
					<a href={github}>
						<AiOutlineCodeSandbox />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
