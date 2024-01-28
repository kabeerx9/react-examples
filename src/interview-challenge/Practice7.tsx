import { DeleteIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const Tag = ({
  text,
  handleRemoveTag,
}: {
  text: string;
  handleRemoveTag: (text: string) => void;
}) => {
  return (
    <div className="w-auto flex bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
      {text}
      <DeleteIcon
        className="cursor-pointer"
        onClick={() => handleRemoveTag(text)}
      />
    </div>
  );
};

const Practice7 = () => {
  const [query, setQuery] = useState('');

  const [searchItems, setSearchItems] = useState<User[]>([]);
  const [taglist, setTaglist] = useState<string[]>([]);

  const fetchSearchItems = async () => {
    const res = await fetch(`https://dummyjson.com/users/search?q=${query}`);
    const data = await res.json();
    setSearchItems(data.users);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchItems();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const handleRemoveTag = (text: string) => {
    setTaglist((prev) => prev.filter((tag) => tag !== text));
  };

  const handleUserKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (query.length > 0) return;
      if (event.key === 'Backspace') {
        setTaglist((prev) => prev.slice(0, prev.length - 1));
      }
    },
    [query],
  );

  useEffect(() => {
    // need to add event that when backspace is pressed , remove last tag

    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="relative h-full w-full bg-gray-200">
      <div className="text-3xl font-semibold text-center h-12">
        Multi Select Input Component
      </div>
      <div className="flex rounded-lg h-12 bg-white items-center space-x-2">
        {taglist.map((tag: string) => (
          <Tag key={tag} text={tag} handleRemoveTag={handleRemoveTag} />
        ))}
        <input
          type="text"
          className="flex-1 outline-none"
          placeholder='ex : search "john"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="absolute top-28 h-1/2 w-full z-10 overflow-auto">
        {searchItems.length > 0 ? (
          searchItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 p-5 border-2 border-green-800 bg-pink-100 cursor-pointer hover:bg-pink-600"
              onClick={() => {
                if (taglist.find((tag) => tag === item.firstName)) return;
                setTaglist((prev) => [...prev, item.firstName]);
              }}
            >
              <div>{item.firstName}</div>
              <div>{item.lastName}</div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            No result
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice7;
