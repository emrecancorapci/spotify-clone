import { HomeIcon, LibraryBig, SearchIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

import LibraryCard from './sidebar/library-card';
import SidebarCard from './sidebar/sidebar-card';

export default function Sidebar(): JSX.Element {
  const iconProperties = { size: 26, strokeWidth: 2 };

  return (
    <div className="flex max-h-full w-full flex-col gap-2">
      <SidebarCard>
        <NavLink to="/">
          {({ isActive }) => (
            <TooltipWrapper side="right" tooltipContent="Home">
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
            <TooltipWrapper side="right" tooltipContent="Search">
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
      <SidebarCard className="overflow-hidden">
        <div>
          <TooltipWrapper side="right" tooltipContent="Expand Your Library">
            <LibraryBig
              className="text-s-gray-light transition-colors duration-300 hover:text-white"
              {...iconProperties}
            />
          </TooltipWrapper>
        </div>
        <div className="flex flex-col overflow-y-scroll ps-4">
          <LibraryCard isPinned={true} library={{ name: 'Liked Songs', songCount: 0 }} />
          <LibraryCard isPinned={true} library={{ name: 'Heavy Metal', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Jazz', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Funk', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Soul', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Classic Rock', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Progressive Rock', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Death Metal', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Fusion Jazz', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Neo-Soul', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Black Metal', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'R&B', songCount: 0 }} />
          <LibraryCard isPinned={false} library={{ name: 'Indie Rock', songCount: 0 }} />
        </div>
      </SidebarCard>
    </div>
  );
}
