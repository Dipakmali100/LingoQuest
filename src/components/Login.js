import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
        console.log(res.data[3]);
        if (res.data[0] === "exist") {
          history("/dashboard", { state: { firstname: res.data[1], lastname: res.data[2], email: res.data[3], language:res.data[4]} });
        } else if (res.data[0] === "notexist") {
          alert("User have not sign up");
        }
      })
      .catch((e)=>{
        alert("Wrong email and password");
          console.log(e);
      });
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        {/* <img src={image} alt="" /> */}

        <form action="POST" method="POST">
          <div className="formbold-form-title">
            <h2 className="">Login</h2>
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              id="email"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              id="Password"
              className="formbold-form-input"
            />
          </div>

          <Link to="/dashboard"><button className="formbold-btn" onClick={submit}>Login Now</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login
