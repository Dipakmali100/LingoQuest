import React from "react";
import Header from "./Header";

function Quiz() {
  return (
    <div>
      <Header />
      <div className="quiz-container">
        <div className="quiz">
          <div className="quiz-que">
            <b>Q. What is the German word for 'hello'?</b>
          </div>
          <div className="quiz-options" id="options">
          <label class="options">Guten Morgen
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Auf Wiedersehen
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Hallo
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="options">Danke
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
