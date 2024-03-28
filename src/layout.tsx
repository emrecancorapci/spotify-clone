import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import Header from './components/layout/main/header';
import { useAppControllerStore } from './features/appControllerStore';

export default function Layout() {
  const [mainWidth, setMainWidth] = useState(0);
  const mainReference = useRef<HTMLDivElement>(null);
  const sidebarReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainCurrent = mainReference.current;
    if (mainCurrent == undefined) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMainWidth(entry.contentRect.width);
      }
    });

    observer.observe(mainCurrent);
  }, [mainReference.current?.clientWidth]);

  const { isDetailsOpen } = useAppControllerStore((state) => ({ isDetailsOpen: state.isDetailsOpen }));

  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <ResizablePanelGroup autoSaveId="persistence" className="flex flex-1 gap-1 self-stretch" direction="horizontal">
        <ResizablePanel
          className="flex min-w-[72px] items-start justify-center"
          defaultSize={3}
          maxSize={70}
          minSize={3}
          order={1}
        >
          <Sidebar ref={sidebarReference} />
        </ResizablePanel>
        <ResizableHandle className="-left-1" />
        <ResizablePanel
          className="grid size-full overflow-hidden text-clip rounded-lg"
          defaultSize={90}
          maxSize={90}
          minSize={30}
          order={2}
        >
          <div className="flex size-full flex-col bg-s-gray p-2" ref={mainReference}>
            <Header />
            <Outlet context={mainWidth} />
          </div>
        </ResizablePanel>
        <ResizableHandle className={`-right-1 ${isDetailsOpen ? '' : 'hidden'}`} />
        <ResizablePanel
          className={`${
            isDetailsOpen ? 'flex' : 'hidden'
          } min-w-[280px] items-start justify-center overflow-hidden text-clip rounded-lg bg-s-gray-darkest p-2 text-white`}
          defaultSize={12}
          maxSize={22}
          minSize={12}
          order={3}
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
