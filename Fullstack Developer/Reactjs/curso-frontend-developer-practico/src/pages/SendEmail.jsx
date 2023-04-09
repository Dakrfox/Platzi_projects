import React from 'react';
import '@styles/SendEmail.scss';
//imagenes
import Logo from "@logos/logo_yard_sale.svg"
import Email from "@icons/email.svg"

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={Logo}alt="logo" className="se-logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={Email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;