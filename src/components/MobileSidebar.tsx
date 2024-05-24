import React from 'react';

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  interviewChallengeRoutes,
  learnTopicsRoutes,
  practiceRoutes,
} from '@/routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileSidebarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebar = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: MobileSidebarProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
      <SheetContent side={'left'} className="w-3/4 bg-gray-800 p-4">
        {/* PRACTICE ROUTES  */}

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
                onClick={() => {
                  setTimeout(() => {
                    setIsMobileSidebarOpen(false);
                  }, 0);
                  navigate(route.path);
                }}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>

        {/* INTERVIEW ROUTES  */}
        <div>
          <div className="text-blue-500 font-semibold mb-2">Practice:</div>
          <div className="pl-5">
            {interviewChallengeRoutes.map((route, ind) => (
              <div
                key={ind}
                className={cn(
                  'text-white hover:text-blue-400 cursor-pointer mb-1',
                  pathname === route.path && 'text-blue-400',
                )}
                onClick={() => {
                  setTimeout(() => {
                    setIsMobileSidebarOpen(false);
                  }, 0);
                  navigate(route.path);
                }}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>

        {/* REACT TOPIC ROUTES  */}

        <div>
          <div className="text-blue-500 font-semibold mb-2">Practice:</div>
          <div className="pl-5">
            {learnTopicsRoutes.map((route, ind) => (
              <div
                key={ind}
                className={cn(
                  'text-white hover:text-blue-400 cursor-pointer mb-1',
                  pathname === route.path && 'text-blue-400',
                )}
                onClick={() => {
                  setTimeout(() => {
                    setIsMobileSidebarOpen(false);
                  }, 0);
                  navigate(route.path);
                }}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
