import React from "react";
import { Link } from "react-router-dom";
import "./Auth/Auth.css";
function App() {
  return (
    <div className="App">
        <h1>Welcome to Clarity</h1>
      <nav>
        <Link className="buttons" to="/login">Login</Link>
        <Link className="buttons" to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default App;
