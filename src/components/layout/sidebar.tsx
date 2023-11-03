import { HomeIcon, LibraryBig, SearchIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(): JSX.Element {
  const SidebarCard = ({ children }: { children: React.ReactNode | undefined }) => (
    <div className="flex w-full flex-col items-center gap-6 rounded-lg bg-zinc-900 py-4 text-white">{children}</div>
  );

  // const LibraryCard = ({
  //   name,
  //   image,
  //   songCount,
  //   isPinned,
  // }: {
  //   name: string;
  //   image?: string;
  //   songCount: number;
  //   isPinned: boolean;
  // }) => (
  //   <div className="rounded-lg p-2 hover:bg-zinc-800">
  //     <div className="flex items-center gap-2">
  //       <div className="h-12 w-12 shrink-0 rounded-lg bg-zinc-700" style={{ backgroundImage: `url(${image})` }} />
  //       <div className="flex flex-col">
  //         <div className="text-sm font-semibold">{name}</div>
  //         <div className="text-xs text-zinc-500">{songCount} songs</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const iconProperties = { strokeWidth: 2.5, size: 26 };
  return (
    <div className="flex w-full flex-col gap-2">
      <SidebarCard>
        <NavLink to="/">
          {({ isActive }) => <HomeIcon className={isActive ? 'text-white' : 'text-zinc-500'} {...iconProperties} />}
        </NavLink>
        <NavLink to="/search">
          {({ isActive }) => <SearchIcon className={isActive ? 'text-white' : 'text-zinc-500'} {...iconProperties} />}
        </NavLink>
      </SidebarCard>
      <SidebarCard>
        <LibraryBig {...iconProperties} />
      </SidebarCard>
    </div>
  );
}
