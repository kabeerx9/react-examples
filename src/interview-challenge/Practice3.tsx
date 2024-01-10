// CREATE A TREE LIKE STRUCTURE TO SHOW THE FOLLOWING DATA LIKE FILES AND FOLDERS INSIDE
// JUST LIKE IN VSCODE OR ANY OTHER IDE
// THE DATA IS GIVEN BELOW

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { File, Folder, ChevronDown, ChevronRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

// THIS ADDING FILE FUNCTIONALITY IS TEMPORARY BECAUSE IT WILL RESET ON EACH RENDER , we can maybe use useReducer or useState in parent component to store the data

const tempData = {
  name: 'react-practice',
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: '@tanstack/react-query',
          children: [],
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'components',
          children: [
            {
              name: 'App.tsx',
              children: [],
            },
            {
              name: 'index.tsx',
              children: [],
            },
          ],
        },
        {
          name: 'index.tsx',
          children: [],
        },
        {
          name: 'react-app-env.d.ts',
          children: [],
        },
        {
          name: 'setupTests.ts',
          children: [],
        },
      ],
    },
  ],
};

interface FileType {
  name: string;
  children: FileType[];
}

const FilesTree = ({ data }: { data: FileType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const DirectionIcon = isOpen ? ChevronDown : ChevronRight;
  const Icon = data.children.length > 0 ? Folder : File;

  const [fileName, setFileName] = useState<string>('');
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

  const addFile = () => {
    if (fileName) {
      data.children.push({
        name: fileName,
        children: [],
      });
      setFileName('');
      setIsInputOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        addFile();
      }
    });
  }, []);

  return (
    <div className="pl-8">
      <div className="flex items-center gap-3 shadow-lg p-2 border-4 border-black ">
        <div
          className="border-2 border-black cursor-pointer"
          onClick={() => setIsInputOpen((prev) => !prev)}
        >
          <Plus />
        </div>
        {data.children.length > 0 && (
          <DirectionIcon
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            size={30}
          />
        )}
        <Icon size={30} />
        <span>{data.name}</span>
      </div>
      {isInputOpen && (
        <div className="flex gap-2">
          <Input
            autoFocus
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="file name"
          />
          <Button onClick={addFile}>Add File</Button>
        </div>
      )}
      {isOpen &&
        data?.children?.map((item) => (
          <FilesTree key={item.name} data={item} />
        ))}
    </div>
  );
};
const Practice3 = () => {
  return (
    <div className="space-y-20">
      <div className=" text-center text-xl">
        TASK : Create a Tree like component consisting of files and folders ,
        the add functionality is temporary (lost with refresh){' '}
      </div>
      <div
        className={'h-full w-full text-2xl flex items-center justify-center'}
      >
        <FilesTree data={tempData} />
      </div>
    </div>
  );
};
export default Practice3;
