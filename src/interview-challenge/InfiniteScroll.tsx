// using tanstack react-query & react-intersection-observer

import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const InfiniteScroll = () => {
  const { ref, inView } = useInView();

  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(query);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`,
    );
    const data = await res.json();
    return data;
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const todoContent = data?.pages.map((page) =>
    page.map((todo: Todo) => {
      if (todo.title.includes(searchQuery)) {
        return (
          <div
            className=" h-10 w-full p-2 m-2 text-center font-semibold text-xl bg-pink-800 text-white "
            key={todo.id}
          >
            <h1>{todo.title.slice(0, 30)}</h1>
            <p>{todo.completed}</p>
          </div>
        );
      }
    }),
  );

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === 'pending') {
    return <p>Loading ....</p>;
  }
  if (status === 'error') {
    return <p>Error : {error?.message}</p>;
  }

  return (
    <React.Fragment>
      <div className="m-2 p-2 flex sticky">
        <Label className="text-2xl">Search</Label>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full grid grid-cols-2 gap-3">{todoContent}</div>
        <button
          ref={ref}
          className="p-2 m-2 shadow-sm rounded-lg bg-green-400 "
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default InfiniteScroll;
