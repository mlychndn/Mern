import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
      if (response?.data?.status === "success") {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error.message);
      alert("Invalid Credential");
    }
  };
  return (
    <div>
      <h1>LogIn</h1>
      <div>
        <form onSubmit={loginHandler}>
          <div className="input-div">
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your mail address"
              className="input-text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-div">
            <label className="input-label">Password:</label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              className="input-text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
