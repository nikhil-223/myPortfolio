import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_abvcqef",
				"template_536kggf",
				form.current,
				"P7SvBkRpJIRazMOZN"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			e.target.reset();
	};
	return (
		<div id="contact">
			<div className="contact-box">
				<div className="contact-me">
					<span>Contact Me</span>
					<span>
						Feel free to Contact me by submitting the form and I will get back
						to you as soon as possible{" "}
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
				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your e-mail"
						/>
					</div>
					<div>
						<label htmlFor="message" name="message">
							Message
						</label>
						<textarea type="text" name="message" id="message" placeholder="Enter your message" />
					</div>
					<div className="button-area">
						<input type="submit" className="contact-button" value="submit" />
						<button className="contact-button">Clear</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
