import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';

const tempGrid = Array.from({ length: 10 }, () =>
  Array.from({ length: 15 }, () => ({
    isSelected: false,
    value: 0,
  })),
);
const SelectableGrid = () => {
  const [grid, setGrid] = useState(tempGrid);

  const [startCell, setStartCell] = useState({
    row: -1,
    col: -1,
  });

  const [endCell, setEndCell] = useState({
    row: -1,
    col: -1,
  });

  const handleMouseEnter = useCallback(() => {
    if (startCell.row === -1 || startCell.col === -1) return;

    setGrid((prevGrid) => {
      return prevGrid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => ({
          ...cell,
          isSelected:
            rowIndex >= Math.min(startCell.row, endCell.row) &&
            rowIndex <= Math.max(startCell.row, endCell.row) &&
            cellIndex >= Math.min(startCell.col, endCell.col) &&
            cellIndex <= Math.max(startCell.col, endCell.col),
        })),
      );
    });
  }, [endCell.col, endCell.row, startCell.col, startCell.row]);

  useEffect(() => {
    handleMouseEnter();
  }, [endCell, handleMouseEnter]);

  const handleMouseUp = () => {
    setStartCell({
      row: -1,
      col: -1,
    });
    setGrid(tempGrid);
  };

  return (
    <div className="bg-gray-200 h-full w-full flex flex-col gap-5 items-center">
      <div className="text-2xl font-semibold">Selectable Grid in React</div>

      {/* GRID PART  */}

      <div className="flex flex-col gap-2" onMouseUp={handleMouseUp}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={cn(
                  'w-10 h-10 bg-white border border-gray-300 flex items-center justify-center select-none',
                  cell.isSelected && 'bg-green-500',
                )}
                onMouseDown={() => {
                  setStartCell({
                    row: rowIndex,
                    col: cellIndex,
                  });
                }}
                onMouseEnter={() => {
                  setEndCell({
                    row: rowIndex,
                    col: cellIndex,
                  });
                }}
              >
                {rowIndex * grid[0].length + cellIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableGrid;
