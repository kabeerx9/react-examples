import React, { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';

interface Position {
  x: number;
  y: number;
}

const Practice2 = () => {
  const [circles, setCircles] = useState<Position[]>([]);
  const [poppedCircles, setPoppedCircles] = useState<Position[]>([]);

  const handleUndo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const lastCircle = circles.pop();
    if (!lastCircle) return;
    setPoppedCircles((prev) => [...prev, lastCircle]);
  };
  const handleRedo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const lastCircle = poppedCircles.pop();
    if (!lastCircle) return;
    setCircles((prev) => [...prev, lastCircle]);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.clientX, e.clientY);

    setCircles((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
  };

  return (
    <div onClick={handleClick} className="h-full w-full bg-green-200 ">
      <div className="text-center text-xl ">
        TASK : Click anywhere to create circles with centre at your mouse click
        , and then undo and redo those clicks using the buttons{' '}
      </div>
      <div className="flex gap-10 p-5 ">
        <Button size="lg" onClick={handleUndo}>
          Undo
        </Button>
        <Button size="lg" onClick={handleRedo}>
          Redo
        </Button>
      </div>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={'h-10 w-10 bg-red-700 rounded-full absolute'}
          style={{ top: circle.y - 20, left: circle.x - 20 }}
        ></div>
      ))}
    </div>
  );
};
export default Practice2;
