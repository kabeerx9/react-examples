import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden pb-10">
      <Navbar />
      <div className="flex w-full h-full overflow-auto">
        <div className="w-[25%] ">
          <Sidebar />
        </div>
        <Suspense fallback={<LoaderIcon />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
