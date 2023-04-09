import React from 'react';
//imagenes
import Logo from "@logos/logo_yard_sale.svg"
import Email from "@icons/email.svg"

const PasswordRecovery = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img src={Logo} alt="logo" class="logo"/>
                    <h1 class="title">Email has been sent!</h1>
                    <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>
                    <div class="email-image">
                        <img src={Email} alt="email"/>
                    </div>
                    <button class="primary-button login-button">Login</button>
                    <p class="resend">
                        <span>Didn't receive the email?</span>
                        <a href="/">Resend</a>
                    </p>
            </div>
        </div>
    );
}

export  default PasswordRecovery;