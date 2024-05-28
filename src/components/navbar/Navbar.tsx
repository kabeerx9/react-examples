import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

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

        <ProfileDropdown />

        {/* OPEN DIALOG TO SHOW COMPONENT CODE  */}

        <CodeDialog />
      </div>
    </nav>
  );
};

export default Navbar;
