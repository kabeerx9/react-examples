import { useAppSelector } from '@/hooks';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const ShowTodosFromRedux = () => {
  const todos = useAppSelector((state) => state.todo.data);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white hover:text-blue-200">
        Todos
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Just showing redux things</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {todos?.map((todo) => (
          <DropdownMenuItem
            key={todo.id}
            className={cn(
              'text-gray-700',
              todo.completed
                ? 'bg-green-100 hover:bg-green-200'
                : 'bg-red-100 hover:bg-red-200',
            )}
          >
            {todo.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ShowTodosFromRedux;
