import { useCallback, useEffect } from "react";
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../store";

const Quiz = () => {
  const navigate = useNavigate();
  const {
    userAnswers,
    isCompleted,
    setStartTime,
    selectAnswer,
    skipAnswer,
    handleExitQuiz,
  } = useQuizStore();

  const currentQuestion = userAnswers.length;

  useEffect(() => {
    setStartTime();
  }, [setStartTime]);

  const handleSelectAnswer = useCallback(selectAnswer, [selectAnswer]);

  const handleSkipAnswer = useCallback(skipAnswer, [skipAnswer]);

  useEffect(() => {
    if (isCompleted) {
      navigate("/summary");
    }
  }, [isCompleted, navigate, userAnswers]);

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
