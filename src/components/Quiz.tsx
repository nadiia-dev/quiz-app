import { useCallback, useState } from "react";
import questions from "../../questions";
import Timer from "./Timer";
import clsx from "clsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [answerState, setAnswerState] = useState("");

  const currentQuestion =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isCompleted = currentQuestion === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selected: string | null) {
      setAnswerState("answered");
      setUserAnswers((prevState) => {
        return [...prevState, selected ? selected : null];
      });

      setTimeout(() => {
        if (selected === questions[currentQuestion].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [currentQuestion]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isCompleted) {
    return (
      <div>
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[currentQuestion].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="bg-indigo-950 w-full max-w-lg lg:max-w-3xl flex items-center justify-center p-4 rounded-lg shadow-lg">
      <div className="p-4 max-w-lg text-center">
        <Timer
          key={currentQuestion}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2 className="text-sky-50 text-sm">
          {questions[currentQuestion].text}
        </h2>
        <ul className="mt-4 space-y-3">
          {shuffledAnswers.map((answer, index) => {
            const isSelected = answer === userAnswers[userAnswers.length - 1];
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSelectAnswer(answer)}
                  className={clsx(
                    "w-full text-black bg-sky-500 text-sm py-2 px-10 rounded-full transition-all duration-300 hover:bg-purple-500 sm:px-12 md:px-14 lg:px-16",
                    isSelected && answerState === "correct" && "bg-green-500",
                    isSelected && answerState === "wrong" && "bg-red-500",
                    isSelected && answerState === "answered" && "bg-purple-500"
                  )}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
