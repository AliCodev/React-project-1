import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (checkIfAccountExists()) {
      setError("You already have an account. Please log in.");
      return;
    }
    setIsRegistered(true);
  };

  const checkIfAccountExists = () => {
    return false;
  };

  return (
    <div className="main">
      <div className="auth-container">
        <div className="logo"></div>
        <h2>Register</h2>
        {isRegistered ? (
          <div className="notification success">
            <p>Registration successful!</p>
            <Link to="/login">Log in to your account</Link>
          </div>
        ) : (
          <form onSubmit={handleRegister}>
            {error && <div className="notification error">{error}</div>}
            <label>Full name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>
        )}
        <div className="auth-links">
          <span>Already have an account? <Link to="/login">Log in</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
