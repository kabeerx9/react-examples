// using tanstack react-query & react-intersection-observer

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const InfiniteScroll = () => {
	const { ref, inView } = useInView();

	const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
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
		page.map((todo: Todo) => (
			<div
				className=" h-10 w-full p-2 m-2 text-center font-semibold text-xl bg-pink-800 text-white "
				key={todo.id}>
				<h1>{todo.title}</h1>
				<p>{todo.completed}</p>
			</div>
		))
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
		<div className="flex flex-col gap-2 items-center">
			{todoContent}
			<button
				ref={ref}
				className="p-2 m-2 shadow-sm rounded-lg bg-green-400 "
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}>
				{isFetchingNextPage
					? 'Loading more...'
					: hasNextPage
					? 'Load More'
					: 'Nothing more to load'}
			</button>
		</div>
	);
};

export default InfiniteScroll;
