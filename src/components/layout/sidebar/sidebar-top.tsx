import { HomeIcon, SearchIcon } from 'lucide-react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import getIconSize from '@/lib/get-icon-size';

import SidebarCard from './sidebar-card';

const SidebarTop = memo(() => {
  const iconProperties = getIconSize('l', true);

  return (
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
  );
});

SidebarTop.displayName = 'SidebarTop';

export default SidebarTop;
