import React from 'react';
import './style.css'; // Assuming your CSS file is in the same directory

const SocialIcons = () => (
    <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
    </div>
);

const SignUpForm = () => (
    <div className="form-container sign-up">
        <form>
            <h1>Create Account</h1>
            <SocialIcons />
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    </div>
);

const SignInForm = () => (
    <div className="form-container sign-in">
        <form>
            <h1>Sign In</h1>
            <SocialIcons />
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
        </form>
    </div>
);
const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };
    return (
        <div className={`container ${isActive ? "active" : ""}`} id="container">
            <SignUpForm />
            <SignInForm />
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default test;