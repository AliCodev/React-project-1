import React, { useState } from "react";
import "./Auth.css";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    setPasswordChanged(true);
  };

  return (
    <div className="main">
      <div className="auth-container">
        <div className="logo"></div>
        <h2>Change Password</h2>
        {passwordChanged ? (
          <div className="notification success">
            <p>Password changed successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">Change Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
