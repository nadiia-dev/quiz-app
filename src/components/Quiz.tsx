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
    <div className="bg-indigo-950 w-full max-w-lg lg:max-w-3xl flex items-center justify-center p-4 rounded-lg shadow-lg">
      <div className="p-4 max-w-lg text-center">
        <h2 className="text-sky-50 text-sm">
          {questions[currentQuestion].text}
        </h2>
        <ul className="mt-4 space-y-3">
          {questions[currentQuestion].answers.map((answer, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => selectAnswer(answer)}
                className="w-full bg-sky-500 text-white text-md py-2 px-10 rounded-full transition-all duration-300 hover:bg-purple-500 focus:bg-purple-500 sm:px-12 md:px-14 lg:px-16"
              >
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
