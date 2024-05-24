import { cn } from '@/lib/utils';
import {
  interviewChallengeRoutes,
  learnTopicsRoutes,
  practiceRoutes,
} from '@/routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  return (
    <div className="relative w-full h-full bg-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-center text-lg font-bold text-blue-600 mb-4">
          <span>Sidebar Component</span>
        </div>
        <div>
          <div className="text-blue-500 font-semibold mb-2">Practice:</div>
          <div className="pl-5">
            {practiceRoutes.map((route, ind) => (
              <div
                key={ind}
                className={cn(
                  'text-white hover:text-blue-400 cursor-pointer mb-1',
                  pathname === route.path && 'text-blue-400',
                )}
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-blue-500 font-semibold mb-2">
            Interview Challenge:
          </div>
          <div className="pl-5">
            {interviewChallengeRoutes.map((route, ind) => (
              <div
                key={ind}
                className={cn(
                  'text-white hover:text-blue-400 cursor-pointer mb-1',
                  pathname === route.path && 'text-blue-400',
                )}
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-blue-500 font-semibold mb-2">Topics:</div>
          <div className="pl-5">
            {learnTopicsRoutes.map((route, ind) => (
              <div
                key={ind}
                className={cn(
                  'text-white hover:text-blue-400 cursor-pointer mb-1',
                  pathname === route.path && 'text-blue-400',
                )}
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* THIS DIV WILL BE THE RIGHT LINE OF THE SIDEBAR TO CONTROL WIDTH LATER ON */}
      <div className="absolute w-1 h-full bg-blue-800 top-0 right-0 cursor-ew-resize" />
    </div>
  );
};

export default Sidebar;
