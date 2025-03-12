import { useEffect, useState } from "react";

interface Props {
  timeout: number;
  onTimeout: (() => void) | null;
}

const Timer = ({ timeout, onTimeout }: Props) => {
  const [timerValue, setTimerValue] = useState(timeout);
  console.log(timeout);

  useEffect(() => {
    if (!onTimeout) return;

    const timeoutVal = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutVal);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(
      () => setTimerValue((prevState) => prevState - 100),
      100
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timeout} value={timerValue} />;
};

export default Timer;
