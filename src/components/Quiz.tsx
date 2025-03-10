import { useState } from "react";
import questions from "../../questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const currentQuestion = userAnswers.length;

  const selectAnswer = (selected: string) => {
    setUserAnswers((prevState) => {
      return [...prevState, selected];
    });
  };

  return (
    <div>
      <div>
        <h2>{questions[currentQuestion].text}</h2>
        <ul>
          {questions[currentQuestion].answers.map((answer, index) => (
            <li key={index}>
              <button type="button" onClick={() => selectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
