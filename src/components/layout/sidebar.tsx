import SidebarLibraryExplorer from './sidebar/sidebar-library-explorer';
import SidebarTop from './sidebar/sidebar-top';

export default function Sidebar(): JSX.Element {
  return (
    <div className="flex max-h-full w-full flex-col gap-2">
      <SidebarTop />
      <SidebarLibraryExplorer />
    </div>
  );
}
