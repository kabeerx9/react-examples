import { LoaderIcon } from 'lucide-react';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar';
import { cn } from './lib/utils';
import MobileSidebar from './components/MobileSidebar';

const Home = () => {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = screenWidth <= 768;

  const [sidebarWidth, setSidebarWidth] = useState(384);

  const handleSidebarWidthChange = (width: number) => {
    setSidebarWidth(width);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile ? (
          <div
            className={cn(
              'flex overflow-y-auto transition-all duration-300 ease-in-out',
              isDesktopSidebarOpen ? `w-[${sidebarWidth}px]` : 'w-0',
            )}
          >
            <div className={cn('w-full')}>
              <Sidebar onWidthChange={handleSidebarWidthChange} />
            </div>
          </div>
        ) : (
          <MobileSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />
        )}

        <div className="flex-1 overflow-y-auto">
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <LoaderIcon size={40} />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
