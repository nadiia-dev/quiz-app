import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col justify-center items-center p-7 w-[80%] text-center my-0 mx-auto">
      <h2 className="text-3xl font-bold mb-5 text-slate-800">
        Welcome to the Quiz!
      </h2>
      <p className="text-xl mb-2.5 text-red-900">
        Please note: You will have 15 seconds to answer each question.
      </p>
      <p className="text-xl text-slate-800 mb-7">
        There will be 10 React-related questions, so be prepared! If you're
        ready to start, click the button below. Good luck and have fun!
      </p>
      <button
        type="button"
        onClick={handleStartQuiz}
        className="bg-indigo-500 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:bg-indigo-600"
      >
        Start quiz
      </button>
    </div>
  );
};

export default Home;
