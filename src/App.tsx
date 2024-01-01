import { useEffect, useState } from 'react';
import Practice5 from './interview-challenge/Practice5';

const TIME = 30;

const App = () => {
  const [seconds, setSeconds] = useState(TIME);
  useEffect(() => {
    const i = setInterval(() => {
      setSeconds((s) => {
        if (s === 0) {
          clearInterval(i);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-screen w-screen">
      <Practice5 size={200} timeRemaining={seconds} totalTime={TIME} />
    </div>
  );
};

export default App;
