import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FaReadme } from "react-icons/fa";

const Project = (props) => {
	const { projectName, imgURL, projectURL } = props;
	return (
		<div className={`project ${projectName}`}>
			<img src={imgURL} alt={projectName} />
			<div className="project-details">
				<span>{projectName}</span>
				<div className="project-read-more">
					<a href={projectURL} target="blank">
						<BsFillPlayFill />
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
