import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="main">
      <div className="auth-container">
        <div className="logo"></div>
        <h2>Log in</h2>
        {isLoggedIn ? (
          <div className="welcome-message">
            <p>Welcome! You have successfully logged in.</p>
            <Link to="/">Go to Dashboard</Link>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <label>Email address</label>
            <input type="email" name="email" required />

            <label>Password</label>
            <input type="password" name="password" required />

            <button type="submit">Log in</button>
          </form>
        )}
        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span>Don't have an account? <Link to="/register">Register now</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
