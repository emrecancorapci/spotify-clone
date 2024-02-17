import { ListMusicIcon, Mic2Icon, MonitorSpeaker, PlaySquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ControlButton from '@/components/ui/control-button';
import { toggleIsNowPlaying } from '@/features/app-controller/app-controller-slice';
import getIconSize from '@/lib/get-icon-size';
import { useAppDispatch } from '@/store';

import VolumeController from './volume-controller';

export default function OtherControls(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateIfSameGoBack = (path: string) => (location.pathname === path ? navigate(-1) : navigate(path));

  const openPlayingView = () => dispatch(toggleIsNowPlaying());
  const openLyrics = () => navigateIfSameGoBack('/lyrics');
  const openQueue = () => navigateIfSameGoBack('/queue');

  const iconProperty = getIconSize();

  return (
    <div className="flex w-auto flex-row items-center">
      <ControlButton onClick={openPlayingView} tooltipText="Now Playing View" type="button">
        <PlaySquareIcon {...iconProperty} />
      </ControlButton>
      <ControlButton onClick={openLyrics} tooltipText="Lyrics" type="button">
        <Mic2Icon {...iconProperty} />
      </ControlButton>
      <ControlButton onClick={openQueue} tooltipText="Queue" type="button">
        <ListMusicIcon {...iconProperty} />
      </ControlButton>
      <ControlButton onClick={openPlayingView} type="button">
        <MonitorSpeaker {...iconProperty} />
      </ControlButton>
      <VolumeController />
    </div>
  );
}
