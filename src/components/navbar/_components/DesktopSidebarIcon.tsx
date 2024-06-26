import { SidebarCloseIcon, SidebarOpenIcon } from 'lucide-react';

interface DesktopSidebarIconProps {
  isDesktopSidebarOpen: boolean;
  setIsDesktopSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopSidebarIcon = ({
  isDesktopSidebarOpen,
  setIsDesktopSidebarOpen,
}: DesktopSidebarIconProps) => {
  return isDesktopSidebarOpen ? (
    <SidebarOpenIcon
      onClick={() => {
        setIsDesktopSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer"
    />
  ) : (
    <SidebarCloseIcon
      onClick={() => {
        setIsDesktopSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer"
    />
  );
};

export default DesktopSidebarIcon;
