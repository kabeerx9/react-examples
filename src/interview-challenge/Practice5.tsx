import { cn } from '@/lib/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const Practice5 = () => {
  const countInBox = useMemo(() => {
    let count = 0;
    for (let i = 0; i < BOX_DATA.length; i++) {
      for (let j = 0; j < BOX_DATA[0].length; j++) {
        if (BOX_DATA[i][j] === 1) {
          count++;
        }
      }
    }
    return count;
  }, []);

  const [isSelected, setIsSelected] = useState(() => {
    const arr = [];
    for (let i = 0; i < BOX_DATA.length; i++) {
      arr.push(new Array(BOX_DATA[0].length).fill(false));
    }
    return arr;
  });

  const [selectOrder, setSelectOrder] = useState<string[]>([]);

  const isOngoing = useRef(false);

  const handleSelect = (rowIndex: number, colIndex: number) => {
    if (isSelected[rowIndex][colIndex] || isOngoing.current) {
      return;
    }
    setIsSelected((prev) => {
      const newArr = [...prev];
      newArr[rowIndex][colIndex] = true;
      return newArr;
    });

    setSelectOrder((prev) => [...prev, `${rowIndex}-${colIndex}`]);
  };
  useEffect(() => {
    if (selectOrder.length === countInBox) {
      isOngoing.current = true;

      let index = 0;
      const interval = setInterval(() => {
        const [row, col] = selectOrder[index].split('-').map(Number);
        setSelectOrder((prev) => prev.slice(1));
        setIsSelected((prev) => {
          const newArr = [...prev];
          newArr[row][col] = false;
          return newArr;
        });
        index++;

        if (index === countInBox) {
          clearInterval(interval);
          isOngoing.current = false;
        }
      }, 1000);
    }
  }, [selectOrder, countInBox]);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      {/* display the matrix */}
      <div className="grid grid-cols-3 w-60 gap-2">
        {BOX_DATA.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <div
              className={cn(
                'h-10 w-10 bg-white text-black border-2 border-black',
                BOX_DATA[rowIndex][colIndex] === 0 && 'border-none text-white',
                isSelected[rowIndex][colIndex] && 'bg-green-500',
                !isSelected[rowIndex][colIndex] && 'bg-white',
              )}
              onClick={() => handleSelect(rowIndex, colIndex)}
            >
              {rowIndex}-{colIndex}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Practice5;
