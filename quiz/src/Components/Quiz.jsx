import { useState } from "react";
import questions from "../Resources/quizQuestion";
import "./QuizStyle.css";
function Quiz() {
  const [state, setState] = useState(0);

  const handlePrev = () => {
    if (state == 0) {
      setState(14);
    } else {
      setState(state - 1);
    }
  };

  const handleNext = () => {
    if (state == 14) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };

  const handleQuit = () => {
    alert("Are you Quitting LAD!! 🗿🗿🗿");
    setState(0);
  };
  return (
    <div className="quizContainer">
      <h1>Question</h1>
      <p id="number">
        {state + 1} of {questions.length}
      </p>
      <p id="questionTag">{questions[state].question}</p>
      <div className="options">
        <button className="opts">{questions[state].optionA}</button>
        <button className="opts">{questions[state].optionB}</button>
        <button className="opts">{questions[state].optionC}</button>
        <button className="opts">{questions[state].optionD}</button>
      </div>
      <div className="selectionBtns">
        <button onClick={handlePrev} id="prev">
          Previous
        </button>
        <button onClick={handleNext} id="next">
          Next
        </button>
        <button onClick={handleQuit} id="quit">
          Quit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
