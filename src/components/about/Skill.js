import React, { useEffect, useRef } from "react";
import {
	motion,
	useInView,
	useAnimation,
} from "framer-motion";

const Skill = (props) => {
	const { skillName, skillPercentage } = props;

	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "-30px",
		once: true,
	});
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}

	}, [isInView,controls]);

	const skillsVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 0.5,
			},
		},
	};

	return (
		<motion.span
			ref={ref}
			className="skill"
			variants={skillsVariants}
			initial="hidden"
			animate={controls}
			>
			{skillName}
			<div
				className="skillPercentage">
				{skillPercentage}
			</div>
		</motion.span>
	);
};

export default Skill;
