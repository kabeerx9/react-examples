import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Accordian = () => {
  const [accordianData] = useState([
    {
      id: 1,
      title: 'Section 1',
      content: 'Section 1 content',
    },
    {
      id: 2,
      title: 'Section 2',
      content: 'Section 2 content',
    },
    {
      id: 3,
      title: 'Section 3',
      content: 'Section 3 content',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center rounded-lg">
      {accordianData.map((item) => (
        <AccordianContent
          title={item.title}
          content={item.content}
          id={item.id}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

interface AccordianContentProps {
  title: string;
  content: string;
  id: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AccordianContent = ({
  title,
  content,
  id,
  activeIndex,
  setActiveIndex,
}: AccordianContentProps) => {
  return (
    <div className="w-1/2 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <div>{title}</div>
        {activeIndex === id ? (
          <ArrowDown
            onClick={() => setActiveIndex(0)}
            className="cursor-pointer"
          />
        ) : (
          <ArrowRight
            onClick={() => setActiveIndex(id)}
            className="cursor-pointer"
          />
        )}
      </div>
      <div
        className={cn(
          'p-2 transition-all duration-500 ease-in-out bg-purple-200',
          activeIndex === id ? 'block' : 'hidden',
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordian;
