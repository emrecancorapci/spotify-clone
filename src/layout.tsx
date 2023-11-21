import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/sidebar';
import Footer from './components/layout/footer';
import { useTypedSelector } from './store';

export default function Layout() {
  const isNowPlayingVisible = useTypedSelector((state) => state.appController.isNowPlayingVisible);
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <div className="flex flex-1 gap-2 self-stretch">
        <div className="flex min-w-[72px] items-start justify-center">
          <Sidebar />
        </div>
        <main className="flex w-full flex-1 overflow-hidden text-clip rounded-lg">
          <Outlet />
        </main>
        <div
          className={`${
            isNowPlayingVisible ? 'flex' : 'hidden'
          } min-w-[280px] items-start justify-center overflow-hidden text-clip rounded-lg bg-zinc-900 p-2 text-white`}
        >
          Now Playing Bar
        </div>
      </div>
      <div className="max-h-[72px] shrink-0 self-stretch">
        <Footer />
      </div>
    </div>
  );
}
