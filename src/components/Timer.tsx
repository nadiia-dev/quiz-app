import { useEffect, useState } from "react";

interface Props {
  timeout: number;
  onTimeout: () => void;
}

const Timer = ({ timeout, onTimeout }: Props) => {
  const [timerValue, setTimerValue] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => setTimerValue((prevState) => prevState - 100), 100);
  }, []);

  return (
    <progress
      max={timeout}
      value={timerValue}
      className="w-full h-2 mb-4 bg-gray-200 rounded-full appearance-none"
    />
  );
};

export default Timer;
