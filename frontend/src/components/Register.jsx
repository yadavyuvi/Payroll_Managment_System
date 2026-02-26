import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ name:"", email:"", password:"" });
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value});
  };

  const register = async ()=>{
    try{
      await axios.post("http://localhost:8080/api/auth/register", user);
      alert("Account Created ✅");
      navigate("/login");
    }catch{
      alert("Error creating account ❌");
    }
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
      <input name="name" placeholder="Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;