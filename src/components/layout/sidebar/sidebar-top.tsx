import { HomeIcon, SearchIcon } from 'lucide-react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import getIconSize from '@/lib/get-icon-size';

const SidebarTop = memo(() => {
  const iconProperties = getIconSize('l', true);

  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-lg bg-s-gray-darkest py-4 text-white">
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
    </div>
  );
});

SidebarTop.displayName = 'SidebarTop';

export default SidebarTop;
