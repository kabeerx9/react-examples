import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const AutoCompleteAndSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [searchList, setSearchList] = useState<{ value: string }[]>([]);

  const fetchData = async () => {
    const data = await fetch(
      'https://api.addsearch.com/v1/suggest/1bed1ffde465fddba2a53ad3ce69e6c2?term=' +
        searchTerm,
    );
    const response = await data.json();
    setSearchList(response.suggestions);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-2 bg-gray-200">
        <div>Google Logo</div>

        <div className="z-0 relative h-10 w-full flex items-center bg-white px-5 rounded-s-full rounded-e-full   ">
          <SearchIcon className="text-gray-500" />
          <div className="absolute w-96 h-40  top-2 left-14 ">
            <input
              type="text"
              placeholder="Search here"
              className=" w-full h-7 bg-transparent text-black  outline-none "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm.length > 0 && (
              <div className="w-full flex flex-col max-h-80 overflow-y-auto bg-white border-2 border-black">
                {searchList.map((item) => (
                  <div className="w-full h-10 flex items-center justify-start px-5 hover:bg-gray-200">
                    {item.value}
                  </div>
                ))}
                {searchList.length === 0 && (
                  <div className="w-full h-10 flex items-center justify-start px-5">
                    No data found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteAndSearch;
