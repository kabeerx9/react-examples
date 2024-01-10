import { Button } from '@/components/ui/button';
import { useState } from 'react';

const temp1 = ['apples', 'bananas', 'oranges', 'grapes', 'pears', 'pineapple'];
const temp2 = ['potatoes', 'beans', 'carrots', 'spinnach', 'kale', 'broccoli'];

const Practice1 = () => {
  // button , and on click swap only the odd item from cartA , with odd items in cart B

  const [cartA, setCartA] = useState(temp1);
  const [cartB, setCartB] = useState(temp2);

  const handleSwap = () => {
    const newCartA = cartA.map((item, index) => {
      if (index % 2 !== 0) {
        return cartB[index];
      }
      return item;
    });
    const newCartB = cartB.map((item, index) => {
      if (index % 2 !== 0) {
        return cartA[index];
      }
      return item;
    });
    setCartA(newCartA);
    setCartB(newCartB);
  };

  return (
    <div className="space-y-10">
      <div className="text-center font-semibold text-3xl text-purple-600">
        TASK : Swap odd positions on clicking the button
      </div>
      <div className="flex justify-center items-center p-4 text-2xl gap-8">
        <div className="flex flex-col gap-4 border-2 border-black p-4 rounded-lg">
          {cartA.map((item, index) => (
            <div key={index}>
              {index + 1} : {item}
            </div>
          ))}
        </div>
        <Button onClick={handleSwap}>Swap</Button>
        <div className="flex flex-col gap-4 border-2 border-black p-4 rounded-lg">
          {cartB.map((item, index) => (
            <div key={index}>
              {index + 1} : {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice1;
