import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="card">
      <button className="back" onClick={() => navigate("/")}>← Back</button>

      <h2>Create your PopX account</h2>

      <input placeholder="Full Name" />
      <input placeholder="Phone number" />
      <input placeholder="Email address" />
      <input placeholder="Password" />
      <input placeholder="Company name" />

      <div className="radio">
        <p>Are you an Agency?</p>
        <label><input type="radio" name="agency"/> Yes</label>
        <label><input type="radio" name="agency"/> No</label>
      </div>

      <button className="btn primary" onClick={() => navigate("/account")}>
        Create Account
      </button>

      <p>
        Already have an account? <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}

export default Register;