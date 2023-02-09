import React, { forwardRef } from 'react'
import './About.css'
import image from '../../images/image.png'

const About = (props,ref) => {
	const {visible}=props;
  return (
		<section id="about" className="about" ref={ref}>
			<div className="about-container">
				<div
					className={`profile-info ${visible ? "visibletext" : "hidden"}`}
					>
					<div>
						<span>I'm Nikhil Shekhawat</span>
					</div>
					<div>
						<span>Front-end</span>
						<span >Developer</span>
					</div>
					<div>
						<span>
							I have worked on MERN stack and created various projects on
							React-Redux{" "}
						</span>
					</div>
				</div>
				<div className={`profile-pic ${visible ? "visibleimg" : "hidden"}`}>
					<img src={image} alt="imag" />
				</div>
			</div>
		</section>
	);
}
const forwardAbout = forwardRef(About)
export default forwardAbout;