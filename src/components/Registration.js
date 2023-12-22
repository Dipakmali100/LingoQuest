import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Registration() {

  const history = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/register",{
        firstname,
        lastname,
        email,
        password,
        language
      }).then((res)=>{
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/dashboard",{state:{firstname:firstname,lastname:lastname,email:email,language:language}});
        }
      }).catch((e) => {
        alert("wrong details");
        console.log(e);
      });
    }catch (e) {
      console.log(e);
    }
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);
    // console.log(language);
  }

  
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">

        <form action="POST" method="POST">
          <div className="formbold-form-title">
            <h2 className="">Register Now</h2>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label for="firstname" className="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                id="firstname"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label for="lastname" className="formbold-form-label">
                {" "}
                Last name{" "}
              </label>
              <input
                type="text"
                name="lastname"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                id="lastname"
                className="formbold-form-input"
              />
            </div>
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
            Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Set Account Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-3">
            <label for="purpose" className="formbold-form-label">
              Which language do you want to learn?
            </label>
            <select name="purpose" onChange={(e) => {
                setLanguage(e.target.value);
              }} id="purpose" className="formbold-form-input">
              <option value="">Select a language</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <Link to="/login"><button className="formbold-btn" onClick={submit}>Register Now</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Registration;
