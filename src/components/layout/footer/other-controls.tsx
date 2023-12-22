import { ListMusicIcon, Mic2Icon, MonitorSpeaker, PlaySquareIcon } from 'lucide-react';

import { toggleIsNowPlaying } from '@/features/app-controller/app-controller-slice';
import { useAppDispatch } from '@/store';

import ControlButton from './control-button';
import VolumeController from './volume-controller';

export default function OtherControls(): JSX.Element {
  const dispatch = useAppDispatch();

  const openPlayingView = () => {
    dispatch(toggleIsNowPlaying());
  };

  const iconProperty = { strokeWidth: 2.5, size: 18 };

  return (
    <div className="flex w-auto flex-row items-center">
      <ControlButton tooltipText="Now Playing View" type="button" onClick={openPlayingView}>
        <PlaySquareIcon {...iconProperty} />
      </ControlButton>
      <ControlButton tooltipText="Lyrics" type="button" onClick={openPlayingView}>
        <Mic2Icon {...iconProperty} />
      </ControlButton>
      <ControlButton tooltipText="Queue" type="button" onClick={openPlayingView}>
        <ListMusicIcon {...iconProperty} />
      </ControlButton>
      <ControlButton type="button" onClick={openPlayingView}>
        <MonitorSpeaker {...iconProperty} />
      </ControlButton>
      <VolumeController />
    </div>
  );
}
