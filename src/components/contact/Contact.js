import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div id="contact">
			<div className="contact-box">
				<div className="contact-me">
					<span>Contact Me</span>
					<span>
						Feel free to Contact me by submitting the form and I will get
						back to you as soon as possible{" "}
					</span>
					<div className="contact-links">
						<a
							href="https://www.linkedin.com/in/nikhil-shekhawat-986385179"
							target={"_blank"}
							rel="noreferrer">
							<i className=" fa-brands fa-linkedin"></i>
						</a>
						<a
							href="https://github.com/nikhil-223"
							target={"_blank"}
							rel="noreferrer">
							<i className=" fa-brands fa-square-github"></i>
						</a>
					</div>
				</div>
				<div className="contact-form">
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter your e-mail" />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea type="text" id="message" />
					</div>
					<div>
						<button className="button">Submit</button>
						<button className="button">Clear</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
