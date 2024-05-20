import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[25%] overflow-y-auto">
          <Sidebar />
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
