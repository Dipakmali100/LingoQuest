import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

function Dashboard() {
  const location = useLocation();
  const [performance, setPerformance] = useState({
    currentChapter: 1,
    language: "",
    xp: 0,
    chapters: {},
  });

  const [loading, setLoading] = useState(true);

  const email = location.state.email;
  const language = location.state.language;

  useEffect(() => {
    // Use axios.post for sending data in the request body
    axios
      .post("http://localhost:8000/dashboard", { email, language })
      .then((res) => {
        setPerformance(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [email, language]); // Include email and language in the dependency array

  useEffect(() => {
    console.log(performance);
  }, [performance]);

  if (loading) {
    return <div>Loading...</div>;
  }
  function getMark(chapter) {
    let mark = 0;
  
    for (let i = 0; i < 5; i++) {
      // Check if chapter[i] is defined and has the 'quizRemark' property
      if (chapter[i] && chapter[i].quizRemark === true) {
        if (i === 1 || i === 2 || i === 4) {
          mark += i;
        } else if (i === 2) {
          mark += i - 1;
        } else {
          mark += i + 1;
        }
      }
    }
  
    return mark;
  }
  
  function prevChapter(num){
    if(num===1){
      alert("This is the 1st chapter, You can't go on previous chapter");
    }
  }

  function nextChapter(num){
      alert("First you need to complete this chapter, After that you can move on to next");
  }
  // Check if chapters[currentChapter] is an object
  const chapterObject =
    typeof performance.chapters[performance.currentChapter] === "object" &&
    performance.chapters[performance.currentChapter];

  return (
    <div className="dashboard">
      <Header />
      <div className="chapter-container">
        <div className="chapter">
          <div className="chapter-progress">
            <div>
              <div className="chapter-title">
                <h2>Chapter {performance.currentChapter}</h2>
              </div>
            </div>
            <div className="chapter-rightside-progress">
              <div className="chapter-remark">{performance.language}</div>
              <div className="chapter-points">XP: {performance.xp}</div>
            </div>
          </div>
          <div className="chapter-quizzes">
            {chapterObject &&
              Object.values(chapterObject)
                .slice(0, -2) // Exclude the last element
                .map((quiz, index) => (
                  <div className="chapter-quiz" key={index}>
                    <div className="chapter-quiz-title">{`Quiz-${
                      index + 1
                    }`}</div>
                    <div className="chapter-quiz-result">{getMark(chapterObject)}/10</div>
                    <div className="chapter-quiz-status">
                      <Link to="/quiz">
                        <button className="chapter-quiz-btn">Start</button>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="chapter-navigation">
        <div className="prev-chapter">
          <button className="chapter-quiz-btn" onClick={() => prevChapter(performance.currentChapter)}>Prev Chapter</button>
        </div>
        <div className="chapter-navigation-midbar"></div>
        <div className="next-chapter">
          <button className="chapter-quiz-btn" onClick={() => nextChapter(performance.currentChapter)}>Next Chapter</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
