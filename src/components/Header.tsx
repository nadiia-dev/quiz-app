import logo from "../assets/quiz_logo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center p-4">
      <img src={logo} alt="quiz logo" className="w-16 h-16 md:w-20 md:h-20" />
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent">
        React Quiz
      </h1>
    </header>
  );
};

export default Header;
