import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/sidebar';
import NowPlayingBar from './components/layout/now-playing-bar';

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <div className="flex flex-1 gap-2 self-stretch">
        <div className="flex min-w-[72px] items-start justify-center">
          <Sidebar />
        </div>
        <main className="w-full bg-zinc-500">
          <Outlet />
        </main>
      </div>
      <div className="min-h-[72px] shrink-0 self-stretch bg-green-300">
        <NowPlayingBar />
      </div>
    </div>
  );
}
