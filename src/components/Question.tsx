import { useState } from "react";
import Answers from "./Answers";
import Timer from "./Timer";
import questions from "../../questions";

interface Props {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
}

interface Answer {
  answer: string;
  isCorrect: boolean | null;
}

const Question = ({ index, onSelectAnswer, onSkipAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>({
    answer: "",
    isCorrect: false,
  });

  let timer = 10000;
  if (selectedAnswer.answer) {
    timer = 1000;
  }
  if (selectedAnswer.isCorrect !== null) {
    timer = 2000;
  }
  const handleSelectAnswer = (answer: string | null) => {
    if (answer === null) answer = "";
    setSelectedAnswer({ answer, isCorrect: null });

    setTimeout(() => {
      setSelectedAnswer({
        answer,
        isCorrect: questions[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (selectedAnswer.answer && selectedAnswer.isCorrect !== null) {
    answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
  } else if (selectedAnswer.answer) {
    answerState = "answered";
  }

  return (
    <div className="p-4 max-w-lg text-center">
      <Timer
        key={timer}
        timeout={timer}
        onTimeout={selectedAnswer.answer === "" ? onSkipAnswer : null}
      />
      <h2 className="text-sky-50 text-sm">{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer.answer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
