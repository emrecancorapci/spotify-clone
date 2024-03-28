import { ListMusicIcon, Mic2Icon, MonitorSpeaker, PlaySquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ControlButton from '@/components/ui/control-button';
import { toggleIsNowPlaying } from '@/features/app-controller/app-controller-slice';
import { useAppDispatch } from '@/store';

import VolumeController from './volume-controller';

export default function OtherControls(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ifSameGoBackElseNavigate = (path: string) => (location.pathname === path ? navigate(-1) : navigate(path));

  const openPlayingView = () => dispatch(toggleIsNowPlaying());
  const openLyrics = () => ifSameGoBackElseNavigate('/lyrics');
  const openQueue = () => ifSameGoBackElseNavigate('/queue');

  return (
    <div className="flex w-auto flex-row items-center">
      <ControlButton Icon={PlaySquareIcon} onClick={openPlayingView} tooltipText="Now Playing View" button />
      <ControlButton Icon={Mic2Icon} onClick={openLyrics} tooltipText="Lyrics" button />
      <ControlButton Icon={ListMusicIcon} onClick={openQueue} tooltipText="Queue" button />
      <ControlButton Icon={MonitorSpeaker} onClick={openPlayingView} button />
      <VolumeController />
    </div>
  );
}
