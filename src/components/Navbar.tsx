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
  MenuIcon,
  MenuSquareIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useMediaQuery } from 'usehooks-ts';

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

interface NavbarProps {
  isDesktopSidebarOpen: boolean;
  setIsDesktopSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
  isDesktopSidebarOpen,
  setIsDesktopSidebarOpen,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="w-full p-4 h-16 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-center items-center gap-5">
          <div
            className="text-white font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-300"
            onClick={() => navigate('/')}
          >
            Home
          </div>

          {isMobile ? (
            <MobileSidebarIcon
              isMobileSidebarOpen={isMobileSidebarOpen}
              setIsMobileSidebarOpen={setIsMobileSidebarOpen}
            />
          ) : (
            <DesktopSidebarIcon
              isDesktopSidebarOpen={isDesktopSidebarOpen}
              setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
            />
          )}
        </div>
        {/* IF I AM ON PRACTICE 6 SHOW TODO FROM REDUX TOOLKIT */}
        {location.pathname === '/practice6' && <ShowTodosFromRedux />}
        {/* PROFILE SECTION */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/89746908?v=4" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>About Me</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-700 hover:bg-gray-100">
              Download Resume
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-700 hover:bg-gray-100">
              Contact Me
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

interface DesktopSidebarIconProps {
  isDesktopSidebarOpen: boolean;
  setIsDesktopSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopSidebarIcon = ({
  isDesktopSidebarOpen,
  setIsDesktopSidebarOpen,
}: DesktopSidebarIconProps) => {
  return isDesktopSidebarOpen ? (
    <SidebarOpenIcon
      onClick={() => {
        setIsDesktopSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer text-red-200 "
    />
  ) : (
    <SidebarCloseIcon
      onClick={() => {
        setIsDesktopSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer text-red-200 "
    />
  );
};

interface MobileSidebarIconProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebarIcon = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: MobileSidebarIconProps) => {
  return isMobileSidebarOpen ? (
    <MenuIcon
      onClick={() => {
        setIsMobileSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer text-red-200 "
    />
  ) : (
    <MenuSquareIcon
      onClick={() => {
        setIsMobileSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer text-red-200 "
    />
  );
};
