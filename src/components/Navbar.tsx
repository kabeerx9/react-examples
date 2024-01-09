import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full p-2 h-16 bg-red-400">
      <div className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>Practice</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Simple challenges </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/practice1')}>
              Practice 1
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/practice2')}>
              Practice 2
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/practice3')}>
              Practice 3
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/practice4')}>
              Practice 4
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/practice5')}>
              Practice 5
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/practice6')}>
              Practice 6
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* THIS IS THE MENU FOR REACT SIMPLE TOPICS */}

        <DropdownMenu>
          <DropdownMenuTrigger>Topics</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Basic Things </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/error-boundary')}>
              Error Boundary
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/event-bubbling')}>
              Event Bubbling
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/effect-learn')}>
              Effect Learn
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
