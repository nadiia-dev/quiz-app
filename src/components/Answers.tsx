import { useRef } from "react";

interface Props {
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  onSelect: (answer: string | null) => void;
}

const Answers = ({ answers, selectedAnswer, answerState, onSelect }: Props) => {
  const shuffledAnswers = useRef<typeof answers>(undefined);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  console.log(selectedAnswer, answerState);

  return (
    <ul className="mt-4 space-y-3">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let buttonClass =
          "w-full text-black text-sm py-2 px-10 rounded-full transition-all duration-300 hover:bg-purple-500 sm:px-12 md:px-14 lg:px-16";

        if (isSelected) {
          if (answerState === "answered") {
            buttonClass += " bg-purple-500";
          } else if (answerState === "correct") {
            buttonClass += " bg-green-500";
          } else if (answerState === "wrong") {
            buttonClass += " bg-red-500";
          }
        } else {
          buttonClass += " bg-sky-500";
        }

        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => onSelect(answer)}
              className={buttonClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
