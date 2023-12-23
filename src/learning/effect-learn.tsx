import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import useHook from './useHook';
const EffectLearn = () => {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  // console.log('component re-render');

  // useEffect(() => {
  //   console.log('Use effect mounted');
  //   return () => {
  //     console.log('Use effect unmounted');
  //   };
  // }, [searchTerm]);
  console.log('Component re-render');

  const { searchTerm, setSearchTerm } = useHook();

  useEffect(() => {
    console.log('component Use effect mounted');
    return () => {
      console.log('component Use effect unmounted');
    };
  }, [searchTerm]);

  return (
    <Input
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
export default EffectLearn;
