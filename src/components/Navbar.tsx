import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppSelector } from '@/hooks';
import { cn } from '@/lib/utils';
import {
  interviewChallengeRoutes,
  learnTopicsRoutes,
  practiceRoutes,
} from '@/routes/routes';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const ShowTodosFromRedux = () => {
  const todos = useAppSelector((state) => state.todo.data);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Todos</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Just showing redux things</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {todos?.map((todo) => (
          <DropdownMenuItem
            key={todo.id}
            className={cn('bg-green-400', !todo.completed && 'bg-red-400')}
          >
            {todo.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <nav className="w-full p-2 h-16 bg-red-400">
      <div className="flex justify-between">
        <div
          className="border-2 border-black p-2 rounded-lg bg-green-200 cursor-pointer"
          onClick={() => navigate('/')}
        >
          Home
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-gray-200 p-2 rounded-lg">
            {t('practice')}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Simple challenges </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {practiceRoutes.map((route, ind) => (
              <DropdownMenuItem key={ind} onClick={() => navigate(route.path)}>
                {route.name}
              </DropdownMenuItem>
            ))}
            {interviewChallengeRoutes.map((route, ind) => (
              <DropdownMenuItem key={ind} onClick={() => navigate(route.path)}>
                {route.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* IF I AM ON PRACTICE 6 SHOW TODO FROM REDUX TOOLKIT */}
        {location.pathname === '/practice6' && <ShowTodosFromRedux />}

        {/* THIS IS THE MENU FOR REACT SIMPLE TOPICS */}

        <DropdownMenu>
          <DropdownMenuTrigger className="bg-gray-200 p-2 rounded-lg">
            {t('topics')}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>React Things</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {learnTopicsRoutes.map((route, ind) => (
              <DropdownMenuItem key={ind} onClick={() => navigate(route.path)}>
                {route.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
