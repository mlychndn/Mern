import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signUpHandler = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      console.log(errorMessage);
      setErrorMessage("Passwords do not match");
      alert("password and password confirm are not matching");
      return;
    }
    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
        passwordConfirm,
      });

      console.log(response);
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
      setErrorMessage("err.message");
    }
  };

  return (
    <div className="signUp">
      <h1>sign Up</h1>
      <form className="signUp-form" onSubmit={signUpHandler}>
        <div className="input-div">
          <label className="input-label">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input-text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label className="input-label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your mail address"
            className="input-text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="input-div">
          <label className="input-label">Password:</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="input-text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label className="input-label"> Confirm Password:</label>
          <input
            type="text"
            name="confirm-password"
            placeholder="Enter your password"
            className="input-text"
            onChange={(e) => {
              setpasswordConfirm(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
