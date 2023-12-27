import { ListMusicIcon, Mic2Icon, MonitorSpeaker, PlaySquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { toggleIsNowPlaying } from '@/features/app-controller/app-controller-slice';
import { useAppDispatch } from '@/store';

import ControlButton from './control-button';
import VolumeController from './volume-controller';

export default function OtherControls(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateIfSameGoBack = (path: string) => (location.pathname === path ? navigate(-1) : navigate(path));

  const openPlayingView = () => dispatch(toggleIsNowPlaying());
  const openLyrics = () => navigateIfSameGoBack('/lyrics');
  const openQueue = () => navigateIfSameGoBack('/queue');

  const iconProperty = { strokeWidth: 2.5, size: 18 };

  return (
    <div className="flex w-auto flex-row items-center">
      <ControlButton tooltipText="Now Playing View" type="button" onClick={openPlayingView}>
        <PlaySquareIcon {...iconProperty} />
      </ControlButton>
      <ControlButton tooltipText="Lyrics" type="button" onClick={openLyrics}>
        <Mic2Icon {...iconProperty} />
      </ControlButton>
      <ControlButton tooltipText="Queue" type="button" onClick={openQueue}>
        <ListMusicIcon {...iconProperty} />
      </ControlButton>
      <ControlButton type="button" onClick={openPlayingView}>
        <MonitorSpeaker {...iconProperty} />
      </ControlButton>
      <VolumeController />
    </div>
  );
}
