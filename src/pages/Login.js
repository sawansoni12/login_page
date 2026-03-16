import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="card">

      <button onClick={() => navigate("/")}>← Back</button>

      <h2>Signin to your PopX account</h2>

      <input
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

   <button
  className="btn primary"
  disabled={!email || !password}
  onClick={handleLogin}
>
  Login
</button>

    </div>
  );
}

export default Login;