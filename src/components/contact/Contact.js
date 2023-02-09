import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div id="contact">
			<div className="contact-box">
				<div className="contact-me">
					<span>Contact Me</span>
					<span>
						You can fill this form to contact me and below are my links{" "}
					</span>
					<div className="contact-links">
						<i class=" fa-brands fa-linkedin"></i>
						<i class=" fa-brands fa-square-github"></i>
						<i class=" fa-brands fa-square-facebook"></i>
						<i class=" fa-brands fa-square-instagram"></i>
					</div>
				</div>
				<div className="contact-form">
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
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
