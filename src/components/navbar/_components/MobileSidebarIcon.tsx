import { MenuIcon, MenuSquareIcon } from 'lucide-react';

interface MobileSidebarIconProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebarIcon = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: MobileSidebarIconProps) => {
  return isMobileSidebarOpen ? (
    <MenuIcon
      onClick={() => {
        setIsMobileSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer"
    />
  ) : (
    <MenuSquareIcon
      onClick={() => {
        setIsMobileSidebarOpen((prev) => !prev);
      }}
      className="cursor-pointer"
    />
  );
};

export default MobileSidebarIcon;
