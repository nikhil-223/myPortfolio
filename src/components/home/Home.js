import React, { forwardRef } from 'react'
import './Home.scss'

const Home = (props,ref) => {
	const {visible}=props;
  return (
		<section id="home" className="home" ref={ref}>
			<div className="home-container">
				<div
					className={`profile-info ${visible ? "visibletext" : "hidden"}`}
					>
					<div>
						<span>Hey, I'm Nikhil Shekhawat</span>
					</div>
					<div>
						<span>Full-Stack</span>
						<span >Developer</span>
					</div>
					<div>
						<span>
							I have worked on MERN stack and created various projects on
							React-Redux{" "}
						</span>
					</div>
					<div className='project-button'>
						<a href="#projects">Project</a>	
					</div>
				</div>
			</div>
		</section>
	);
}
const forwardHome = forwardRef(Home)
export default forwardHome;