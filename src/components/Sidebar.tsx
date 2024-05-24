import { cn } from '@/lib/utils';
import {
  interviewChallengeRoutes,
  learnTopicsRoutes,
  practiceRoutes,
} from '@/routes/routes';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  onWidthChange: (width: number) => void;
}

const Sidebar = ({ onWidthChange }: SidebarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    isResizingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;
    if (newWidth < 200) newWidth = 200;
    if (newWidth > 384) newWidth = 384;

    if (sidebarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;

      // Call the parent component's onWidthChange function
      onWidthChange(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={sidebarRef} className={`relative w-full h-full bg-gray-800`}>
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
      <div
        className="absolute w-1 h-full bg-blue-800 top-0 right-0 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Sidebar;
