import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = (e) => {
    setIsRunning(!isRunning);
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
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        handleTimeChange();
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, hours, minutes]);

  return (
    <div className="h-full w-full bg-gray-200">
      <div className="text-3xl font-semibold text-center h-12">
        Stop Watch using react
      </div>
      <div className="flex">
        <div className="flex-1">
          {hours < 10 && <span className="text-4xl font-bold">0</span>}
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-4xl font-bold">:</span>

          {minutes < 10 && <span className="text-4xl font-bold">0</span>}
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-4xl font-bold">:</span>
          {seconds < 10 && <span className="text-4xl font-bold">0</span>}
          <span className="text-4xl font-bold">{seconds}</span>
        </div>
        <div className="flex-1 gap-2 flex flex-col">
          <span>Enter time details </span>
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
          <Button onClick={handleButtonClick}>
            {isRunning ? 'Stop' : 'Start'}
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
      </div>
    </div>
  );
};

export default StopWatch;
