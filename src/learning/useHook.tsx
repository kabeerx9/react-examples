import { useEffect, useState } from 'react';

const useHook = () => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log('hook re-render');

  useEffect(() => {
    console.log('hook Use effect mounted');
    return () => {
      console.log('hook Use effect unmounted');
    };
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
  };
};
export default useHook;
