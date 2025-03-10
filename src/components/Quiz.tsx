import { useCallback, useState } from "react";
import questions from "../../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const currentQuestion = userAnswers.length;
  const isCompleted = currentQuestion === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selected: string | null
  ) {
    if (selected !== null) {
      setUserAnswers((prevState) => {
        return [...prevState, selected];
      });
    }
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div className="bg-indigo-950 w-full max-w-lg lg:max-w-3xl flex items-center justify-center p-4 rounded-lg shadow-lg">
      <Question
        key={currentQuestion}
        index={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
