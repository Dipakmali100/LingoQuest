import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function EntryPage() {
  return (
    <div className="App">
      <div className="App-main">
        <h1>Welcome to LingoQuest</h1>
        <div className="App-para">
          <p>
          Embark on a linguistic adventure with our interactive language learning game, where every question unlocks a world of words. Challenge yourself, earn points, and watch your proficiency soar in the ultimate quest for multilingual mastery!
          </p>
        </div>
        <div className="App-rl">
          <div className="registration-section">
            <Link to="/register">
              <button className="formbold-btn-d">Register</button>
            </Link>
          </div>
          <div className="login-section">
            <Link to="/login">
              <button className="formbold-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
