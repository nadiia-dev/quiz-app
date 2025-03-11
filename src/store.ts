import { create } from "zustand";
import questions from "../questions";

interface QuizStore {
  userAnswers: (string | null)[];
  isCompleted: boolean;
  startTime: number | null;
  setStartTime: () => void;
  selectAnswer: (selected: string | null) => void;
  skipAnswer: () => void;
  handleExitQuiz: () => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  userAnswers: [],
  isCompleted: false,
  startTime: null,
  setStartTime: () =>
    set((state) => {
      return { startTime: state.startTime ?? Date.now() };
    }),
  selectAnswer: (selected) =>
    set((state) => {
      const newAnswers = [...state.userAnswers, selected];
      return {
        userAnswers: newAnswers,
        isCompleted: newAnswers.length === questions.length,
      };
    }),
  skipAnswer: () =>
    set((state) => {
      const newAnswers = [...state.userAnswers, null];
      return {
        userAnswers: newAnswers,
        isCompleted: newAnswers.length === questions.length,
      };
    }),
  handleExitQuiz: () =>
    set((state) => {
      const questionsLeft = Array(
        questions.length - state.userAnswers.length
      ).fill(null as string | null);

      return {
        userAnswers: [...state.userAnswers, ...questionsLeft],
        isCompleted: true,
      };
    }),
}));

export default useQuizStore;
