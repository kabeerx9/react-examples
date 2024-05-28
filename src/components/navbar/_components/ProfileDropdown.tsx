import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
  return (
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
          <Link
            to={
              'https://drive.google.com/file/d/1ioOTg1o1fo716RVK1rjcep79n8Jc0gOT/view?usp=sharing'
            }
            target="_blank"
          >
            Resume
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-100">
          Contact Me
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
