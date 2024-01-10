import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
} from '@/store/todo-store/slices/todoSlice';
import { useState } from 'react';

const Practice6 = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState<string>('');

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

  return (
    <div className="space-y-10 p-5">
      <div>Simple TODO app but using redux toolkit for state management</div>
      <Input
        placeholder="Enter todo text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <div className="grid grid-cols-2">
        {todos.map((todo) => (
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
