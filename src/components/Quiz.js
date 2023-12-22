import React from "react";
import Header from "./Header";

function Quiz() {
  return (
    <div>
      <Header />
      <div className="quiz-container">
        <div className="quiz">
          <div className="quiz-que">
            <b>Q. which option best describes your job role?</b>
          </div>
          <div className="quiz-options" id="options">
          <label class="options">Small Business Owner or Employee
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Nonprofit Owner or Employee
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Journalist or Activist
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Other
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="quiz-navigation">
            <div className="quiz-prev-que">
              <button className="chapter-quiz-btn">Prev Question</button>
            </div>
            <div className="quiz-nav-midbar"></div>
            <div className="quiz-next-que">
              <button className="chapter-quiz-btn" >Next Question</button>
            </div>
          </div>
    </div>
  );
}

export default Quiz;
