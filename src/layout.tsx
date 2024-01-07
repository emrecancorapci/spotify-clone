import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import { selectLayoutStates } from './features/app-controller/app-controller-selectors';
import { useTypedSelector } from './store';

export default function Layout() {
  const { isNowPlayingVisible } = useTypedSelector(selectLayoutStates);

  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <ResizablePanelGroup direction="horizontal" autoSaveId="persistence" className="flex flex-1 gap-1 self-stretch">
        <ResizablePanel
          order={1}
          defaultSize={3}
          minSize={3}
          maxSize={70}
          className="flex min-w-[72px] items-start justify-center"
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle className="-left-1" />
        <ResizablePanel
          order={2}
          defaultSize={90}
          maxSize={90}
          minSize={30}
          className="flex w-full flex-1 overflow-hidden text-clip rounded-lg"
        >
          <Outlet />
        </ResizablePanel>
        <ResizableHandle className={`-right-1 ${isNowPlayingVisible ? '' : 'hidden'}`} />
        <ResizablePanel
          order={3}
          defaultSize={12}
          minSize={12}
          maxSize={22}
          className={`${
            isNowPlayingVisible ? 'flex' : 'hidden'
          } min-w-[280px] items-start justify-center overflow-hidden text-clip rounded-lg bg-s-gray-darkest p-2 text-white`}
        >
          Now Playing Bar
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="h-[72px] shrink-0 self-stretch">
        <Footer />
      </div>
    </div>
  );
}
