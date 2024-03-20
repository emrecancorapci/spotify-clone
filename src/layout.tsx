import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import { selectLayoutStates } from './features/app-controller/app-controller-selectors';
import { useTypedSelector } from './store';

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

  const { isNowPlayingVisible } = useTypedSelector(selectLayoutStates);

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
          <div className="size-full *:size-full" ref={mainReference}>
            <Outlet context={mainWidth} />
          </div>
        </ResizablePanel>
        <ResizableHandle className={`-right-1 ${isNowPlayingVisible ? '' : 'hidden'}`} />
        <ResizablePanel
          className={`${
            isNowPlayingVisible ? 'flex' : 'hidden'
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
