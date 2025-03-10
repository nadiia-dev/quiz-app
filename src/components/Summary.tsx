import questions from "../../questions";
import QuizCompleted from "../assets/winner.png";

const Summary = ({ userAnswers }: { userAnswers: (string | null)[] }) => {
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
    <div>
      <img src={QuizCompleted} alt="quiz trophy" />
      <h2>Quiz completed</h2>
      <div>
        <p>
          <span>{skippedPecentage}%</span>
          <span>skipped</span>
        </p>
        <p>
          <span>{correctPecentage}%</span>
          <span>answered correctly</span>
        </p>
        <p>
          <span>{wrongPercentage}%</span>
          <span>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p>{questions[index].text}</p>
            <p>{answer ?? "skipped"}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Summary;
