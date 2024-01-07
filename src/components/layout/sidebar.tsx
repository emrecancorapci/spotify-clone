import { HomeIcon, LibraryBig, SearchIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import TooltipWrapper from '../ui/tooltip-wrapper';
import LibraryCard from './sidebar/library-card';
import SidebarCard from './sidebar/sidebar-card';

export default function Sidebar(): JSX.Element {
  const iconProperties = { strokeWidth: 2, size: 26 };

  return (
    <div className="flex w-full flex-col gap-2">
      <SidebarCard>
        <NavLink to="/">
          {({ isActive }) => (
            <TooltipWrapper tooltipContent="Home" side="right">
              <HomeIcon
                className={`transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-s-gray-light hover:text-white'
                }`}
                {...iconProperties}
              />
            </TooltipWrapper>
          )}
        </NavLink>
        <NavLink to="/search">
          {({ isActive }) => (
            <TooltipWrapper tooltipContent="Search" side="right">
              <SearchIcon
                className={`transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-s-gray-light hover:text-white'
                }`}
                {...iconProperties}
              />
            </TooltipWrapper>
          )}
        </NavLink>
      </SidebarCard>
      <SidebarCard>
        <TooltipWrapper tooltipContent="Expand Your Library" side="right">
          <LibraryBig
            className="text-s-gray-light transition-colors duration-300 hover:text-white"
            {...iconProperties}
          />
        </TooltipWrapper>
        <div>
          <LibraryCard library={{ name: 'Liked Songs', songCount: 0 }} isPinned={true} />
          <LibraryCard library={{ name: 'Heavy Metal', songCount: 0 }} isPinned={true} />
          <LibraryCard library={{ name: 'Jazz', songCount: 0 }} isPinned={false} />
        </div>
      </SidebarCard>
    </div>
  );
}
