import { useMemo } from "react";
import questions from "../../questions";
import QuizCompleted from "../assets/winner.png";
import useQuizStore from "../store";

const Summary = () => {
  const userAnswers = useQuizStore((state) => state.userAnswers);
  const startTime = useQuizStore((state) => state.startTime);

  const overalTime = useMemo(() => {
    return startTime ? Math.floor((Date.now() - startTime) / 1000) : null;
  }, [startTime]);

  const skipped = userAnswers.filter((answer) => answer === null);
  const correct = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skippedPecentage = Math.round(
    (skipped.length / userAnswers.length) * 100
  );
  const correctPecentage = Math.round(
    (correct.length / userAnswers.length) * 100
  );
  const wrongPercentage = 100 - skippedPecentage - correctPecentage;

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-purple-800 to-purple-600 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <img src={QuizCompleted} alt="quiz trophy" className="w-24 h-24 mb-4" />
      <h2 className="text-2xl font-bold mb-6">Quiz completed</h2>

      <p className="mb-5 font-bold">Total time: {overalTime} seconds</p>

      <div className="flex justify-around w-full mb-6">
        <p className="flex flex-col items-center">
          <span className="text-3xl font-semibold">{skippedPecentage}%</span>
          <span className="text-sm text-gray-200">skipped</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="text-3xl font-semibold">{correctPecentage}%</span>
          <span className="text-sm text-gray-200">answered correctly</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="text-3xl font-semibold">{wrongPercentage}%</span>
          <span className="text-sm text-gray-200">answered incorrectly</span>
        </p>
      </div>

      <ol className="w-full space-y-6 text-center">
        {userAnswers.map((answer, index) => {
          const isCorrect = answer === questions[index].answers[0];

          return (
            <li key={index} className="flex flex-col items-center">
              <h3 className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold mb-2">
                {index + 1}
              </h3>
              <p className="text-gray-300">{questions[index].text}</p>
              <p
                className={`font-semibold ${
                  answer
                    ? isCorrect
                      ? "text-green-400"
                      : "text-red-400"
                    : "text-gray-400"
                }`}
              >
                {answer ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
