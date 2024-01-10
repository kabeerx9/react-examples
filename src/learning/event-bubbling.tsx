import React from 'react';

const EventBubblingExample = () => {
  // Handler for the parent div
  const handleParentClick = () => {
    alert('Parent Div Clicked!');
  };

  // Handler for the child button
  const handleChildClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    alert('Button Clicked!');

    // Uncomment the line below to stop propagation
    // e.stopPropagation();
  };

  return (
    <div
      onClick={handleParentClick}
      className="bg-gray-200 h-1/2 flex justify-around items-center  text-black font-bold py-2 px-4 rounded"
    >
      Parent Div (Click anywhere inside the box)
      <button
        onClick={handleChildClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Child Button
      </button>
    </div>
  );
};

export default EventBubblingExample;
