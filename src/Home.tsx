import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden pb-10">
      <Navbar />
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
