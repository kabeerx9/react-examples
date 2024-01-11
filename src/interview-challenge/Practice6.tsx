import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from '@/store/slices/todoSlice';
import { useEffect, useState } from 'react';

const Practice6 = () => {
  const todos = useAppSelector((state) => state.todo.data);
  const loading = useAppSelector((state) => state.todo.loading);
  const error = useAppSelector((state) => state.todo.error);

  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState<string>('');

  useEffect(() => {
    async function fetch() {
      await dispatch(fetchTodos());
    }
    fetch();
  }, []);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        completed: false,
        id: Math.random(),
        text: todoText,
      }),
    );
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  if (loading)
    return (
      <div className="text-4xl text-center text-green-800">
        Loading from async thunk...
      </div>
    );
  if (error) return <div className="text-4xl text-red-800">Error...</div>;

  return (
    <div className="space-y-10 p-5">
      <div>
        Simple TODO app but using redux toolkit for state management and data
        fetching using async thunk{' '}
      </div>
      <Input
        placeholder="Enter todo text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <div className="grid grid-cols-2">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center pl-10 shadow-lg p-5"
          >
            <div className="flex justify-center items-center space-x-5">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleToggleTodo(todo.id)}
              />
              <div className="text-purple-600 font-lg">{todo.text}</div>
            </div>
            <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice6;
