import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface CustomLIProps {
  children: React.ReactNode;
}

let CustomLI: React.FC<CustomLIProps> = ({ children }) => {
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

const compare = (prevProps: CustomLIProps, nextProps: CustomLIProps) => {
  // return false if we want to re-render the component and true otherwise
  console.log(prevProps, nextProps);
  return true;
};

CustomLI = React.memo(CustomLI, compare);

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
