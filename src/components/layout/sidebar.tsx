import { HomeIcon, LibraryBig, SearchIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import getIconSize from '@/lib/get-icon-size';

import LibraryCard from './sidebar/library-card/library-card';
import SidebarCard from './sidebar/sidebar-card';
import SidebarTop from './sidebar/sidebar-top';

export default function Sidebar(): JSX.Element {
  const iconProperties = getIconSize('l', true);
  const libraries = [
    { name: 'Liked Songs', songCount: 5123 },
    { name: 'Heavy Metal', songCount: 1643 },
    { name: 'Jazz', songCount: 64 },
    { name: 'Funk', songCount: 89 },
    { name: 'Soul', songCount: 59 },
    { name: 'Classic Rock', songCount: 113 },
    { name: 'Progressive Rock', songCount: 34 },
    { name: 'Death Metal', songCount: 120 },
    { name: 'Fusion Jazz', songCount: 20 },
    { name: 'Neo-Soul', songCount: 36 },
    { name: 'Black Metal', songCount: 76 },
    { name: 'R&B', songCount: 12 },
    { name: 'Indie Rock', songCount: 16 },
  ];

  return (
    <div className="flex max-h-full w-full flex-col gap-2">
      <SidebarTop />
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
          {libraries.map((library) => (
            <LibraryCard isPinned={false} key={library.name} library={library} />
          ))}
        </div>
      </SidebarCard>
    </div>
  );
}
