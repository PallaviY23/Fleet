import React, { useState } from "react";

export default function  Signup(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Email Validation Function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard Email Regex
    return emailRegex.test(email);
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!isValidEmail(email)) {
      setError("Invalid Email Format!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear errors
    alert("Sign-up successful! ✅");
  };
    return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <div className="p-4 rounded " style={{ width: "350px" }}>
        <h2 className="text-center" style={{fontSize:"40px"}} >Create new Account</h2>
        <p className="text-center text-muted">
          Already Registered? <a href="#">Sign in</a>
        </p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} style={{backgroundColor:"#e1d3fa"}}>
          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">EMAIL</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">PASSWORD</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">CONFIRM PASSWORD</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-dark w-100" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    )
    }
