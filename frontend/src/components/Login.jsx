import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/login", user);
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } catch {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />

      <button onClick={login}>Login</button>

      {/* 👇 CREATE ACCOUNT LINK */}
      <p style={{marginTop:"20px"}}>
        New User? <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}

export default Login;