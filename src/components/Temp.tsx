import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Temp = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('use effect inside query');

    return () => {
      console.log('CLEAN UP USE EFFECT');
    };
  }, [query]);

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Button size="sm">Click me bro </Button>
    </div>
  );
};

export default Temp;
