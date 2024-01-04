import { HomeIcon, LibraryBig, SearchIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import LibraryCard from './sidebar/library-card';
import SidebarCard from './sidebar/sidebar-card';

export default function Sidebar(): JSX.Element {
  const iconProperties = { strokeWidth: 2, size: 26 };

  return (
    <div className="flex w-full flex-col gap-2">
      <SidebarCard>
        <NavLink to="/">
          {({ isActive }) => <HomeIcon className={isActive ? 'text-white' : 'text-s-gray-light'} {...iconProperties} />}
        </NavLink>
        <NavLink to="/search">
          {({ isActive }) => (
            <SearchIcon className={isActive ? 'text-white' : 'text-s-gray-light'} {...iconProperties} />
          )}
        </NavLink>
      </SidebarCard>
      <SidebarCard>
        <LibraryBig {...iconProperties} />
        <div>
          <LibraryCard library={{ name: 'Liked Songs', songCount: 0 }} isPinned={true} />
          <LibraryCard library={{ name: 'Heavy Metal', songCount: 0 }} isPinned={true} />
          <LibraryCard library={{ name: 'Jazz', songCount: 0 }} isPinned={false} />
        </div>
      </SidebarCard>
    </div>
  );
}
