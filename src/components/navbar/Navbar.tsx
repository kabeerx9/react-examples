import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import CodeDialog from './_components/CodeDialog';
import DesktopSidebarIcon from './_components/DesktopSidebarIcon';
import MobileSidebarIcon from './_components/MobileSidebarIcon';
import ProfileDropdown from './_components/ProfileDropdown';
import ShowTodosFromRedux from './_components/ShowTodosFromRedux';

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = screenWidth <= 600;

  const [isCodeLoading, setIsCodeLoading] = useState(true);

  return (
    <nav className="w-full p-4 h-16 border-b border-black  flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-center items-center gap-5">
          <Button size={'sm'} onClick={() => navigate('/')}>
            Home
          </Button>

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

        <div className="flex justify-between items-center gap-2">
          {/* OPEN DIALOG TO SHOW COMPONENT CODE  */}

          <CodeDialog
            isCodeLoading={isCodeLoading}
            setIsCodeLoading={setIsCodeLoading}
          />

          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
