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
      style={{ padding: '50px', backgroundColor: '#f8f9fa' }}
    >
      Parent Div (Click anywhere inside the box)
      <button
        onClick={handleChildClick}
        style={{ display: 'block', marginTop: '20px' }}
      >
        Child Button
      </button>
    </div>
  );
};

export default EventBubblingExample;
