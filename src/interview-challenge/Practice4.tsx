import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Practice4 = () => {
  const [holes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [mole, setMole] = useState(1);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const moleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      console.log(randomIndex);
      setMole(randomIndex);
    }, 2000);
    return () => clearInterval(moleInterval);
  }, []);

  const handleClick = (index: number) => {
    if (index === mole) {
      console.log('index', index);
      console.log('mole', mole);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="text-4xl font-semibold shadow-lg p-5 ">
        Score : {score}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {holes.map((hole, index) => (
          <div
            key={index}
            onClick={() => handleClick(hole)}
            className={cn(
              'w-40 h-40 flex justify-center items-center cursor-pointer bg-black text-white ',
              mole === index && 'bg-red-500 text-lg ',
            )}
          >
            {mole === index ? 'MOLE' : `Hole ${hole + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice4;
