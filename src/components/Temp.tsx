import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Temp = () => {
  const [query, setQuery] = useState('');

  

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('QUERY', query);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button size="sm">Click me bro </Button>
      </div>
    </div>
  );
};

export default Temp;
