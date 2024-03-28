import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const validationCheck = () => {
    if (seconds < 0 || minutes < 0 || hours < 0) {
      toast.error('Time cannot be negative');
      return false;
    }
    if (seconds > 59 || minutes > 59 || hours > 59) {
      toast.error('Time cannot be greater than 59');
      return false;
    }
    return true;
  };

  const handleButtonClick = () => {
    if (!isRunning) {
      const valid = validationCheck();
      if (!valid) return;
      setIsRunning(true);
    } else {
      setIsPaused(!isPaused);
    }
  };

  const handleTimeChange = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else {
      if (minutes > 0) {
        setSeconds(59);
        setMinutes((prev) => prev - 1);
      } else {
        if (hours > 0) {
          setSeconds(59);
          setMinutes(59);
          setHours((prev) => prev - 1);
        } else {
          setSeconds(0);
          setMinutes(0);
          setHours(0);
          setIsRunning(false);
          toast.success('Time is up');
        }
      }
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        handleTimeChange();
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, hours, minutes, isPaused]);

  return (
    <div className="h-full w-full flex flex-col gap-5  items-center  bg-white">
      <div className="text-3xl font-semibold text-center h-12">
        Stop Watch using react
      </div>

      {/* SHOWING STOPWATCH HERE  */}

      {isRunning && (
        <div className="flex justify-center items-center p-4 border-4 border-gray-800 shadow-lg rounded-lg">
          <div className="rounded-full bg-black text-white p-2">
            {hours < 10 && <span className="text-4xl font-bold">0</span>}
            <span className="text-4xl font-bold">{hours}</span>
          </div>
          <span className="text-4xl font-bold">:</span>
          <div className="rounded-full bg-black text-white p-2">
            {minutes < 10 && <span className="text-4xl font-bold">0</span>}
            <span className="text-4xl font-bold">{minutes}</span>
          </div>
          <span className="text-4xl font-bold">:</span>
          <div className="rounded-full bg-black text-white p-2">
            {seconds < 10 && <span className="text-4xl font-bold">0</span>}
            <span className="text-4xl font-bold">{seconds}</span>
          </div>
        </div>
      )}

      {/* PAUSE AND RESET BUTTON  */}

      <div className="flex flex-col gap-10  justify-center items-center border-4 border-gray-500 p-5 shadow-lg rounded-lg">
        <div className="flex justify-center items-center gap-4">
          <Button onClick={handleButtonClick}>
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button
            onClick={() => {
              setIsRunning(false);
              setHours(0);
              setMinutes(0);
              setSeconds(0);
            }}
          >
            Reset
          </Button>
        </div>

        {/* INPUT VALUES FOR STOPWATCH  */}
        {!isRunning && (
          <div className=" gap-2 flex flex-col">
            <span className="text-center">Enter time details </span>
            <Input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
            <Input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
            />
            <Input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
