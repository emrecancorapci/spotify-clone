import { HomeIcon, SearchIcon } from 'lucide-react';

import IconLink from './icon-link';

export default function SidebarTop(): React.ReactNode {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-lg bg-s-gray-darkest py-4 text-white">
      <IconLink Icon={HomeIcon} title="Home" to="/" />
      <IconLink Icon={SearchIcon} title="Search" to="/search" />
    </div>
  );
}
