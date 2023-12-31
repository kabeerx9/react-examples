import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

let CustomLI = ({ children }: { children: React.ReactNode }) => {
  const renderedCount = useRef(0);
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    renderedCount.current += 1;
  });

  return (
    <li
      className={cn(
        'flex gap-10 items-center justify-center p-5 border-2 border-black ml-[250px]',
        flip && 'bg-red-300',
        !flip && 'bg-blue-300',
      )}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      {children}
      <div>Rendered Count: {renderedCount.current}</div>
    </li>
  );
};

// comment the line below for un-memoized component and see the difference , so if props are same it will not re-render

// so the use case of this can be , like even if a prop changes but we don't want to re-render the component , let's say prop a changes but we don't want to re-render the component , so we can use this to prevent re-rendering
const compare = (prevProps: any, nextProps: any) => {
  // this will return true if we want to re-render and false if we don't
  console.log(prevProps, nextProps);
  return true;
};

CustomLI = React.memo(CustomLI, compare); // memoized what this component renders

const Memoize = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ul
      className={cn('', flip && 'bg-orange-400')}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <h2>Hello Ul</h2>
      <CustomLI>First</CustomLI>
      <CustomLI>Second</CustomLI>
      <CustomLI>Third</CustomLI>
      <CustomLI>Fourth</CustomLI>
      <CustomLI>Fifth</CustomLI>
      <CustomLI>Sixth</CustomLI>
      <CustomLI>Seventh</CustomLI>
    </ul>
  );
};

export default Memoize;
