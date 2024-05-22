import { LoaderIcon } from 'lucide-react';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { cn } from './lib/utils';

const Home = () => {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <div
          className={cn(
            'flex overflow-y-auto transition-all duration-300 ease-in-out',
            isDesktopSidebarOpen ? 'w-[20%]' : 'w-0',
          )}
        >
          <div className={cn('w-full')}>
            <Sidebar />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<LoaderIcon />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
