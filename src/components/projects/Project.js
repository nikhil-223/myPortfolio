import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaReadme } from "react-icons/fa";

const Project = (props) => {
	const { projectName, imgURL, projectURL,projectDesc } = props;
	return (
		<div className={`project ${projectName}`}>
			<a href={projectURL} target="blank">
				<img src={imgURL} alt={projectName} />
			</a>
			
			<div className="project-details">
				<div className="project-nameDesc"><span>{projectName}</span><span className="projectDesc">{projectDesc}</span></div>
				<div className="project-read-more">
					<a href={projectURL} target="blank">
						<HiExternalLink />
					</a>
					<a href={projectURL}>
						<FaReadme />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
