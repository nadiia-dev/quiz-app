import { useCallback, useEffect, useState } from "react";
import questions from "../../questions";
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const currentQuestion = userAnswers.length;
  const isCompleted = currentQuestion === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selected: string | null
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, selected];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const handleExitQuiz = () => {
    setUserAnswers((prevState) => {
      const questionsLeft = Array(questions.length - prevState.length).fill(
        null as string | null
      );
      return [...prevState, ...questionsLeft];
    });
  };

  useEffect(() => {
    if (isCompleted) {
      navigate("/results");
    }
  }, [isCompleted, navigate]);

  return (
    <div className="flex flex-col">
      <div className="bg-indigo-950 w-full max-w-lg lg:max-w-3xl flex items-center justify-center p-4 rounded-lg shadow-lg">
        {!isCompleted && (
          <Question
            key={currentQuestion}
            index={currentQuestion}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
        )}
      </div>
      <button
        type="button"
        onClick={handleExitQuiz}
        className="bg-purple-500 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:bg-purple-600 mt-5 self-end"
      >
        Finish
      </button>
    </div>
  );
};

export default Quiz;
