import { forwardRef, Ref } from 'react';

import SidebarLibraryExplorer from './sidebar/sidebar-library-explorer';
import SidebarTop from './sidebar/sidebar-top';

const Sidebar = forwardRef<HTMLDivElement, unknown>(function Sidebar(
  _properties,
  reference: Ref<HTMLDivElement>,
): JSX.Element {
  return (
    <div ref={reference} className="flex max-h-full w-full flex-col gap-2">
      <SidebarTop />
      <SidebarLibraryExplorer />
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
