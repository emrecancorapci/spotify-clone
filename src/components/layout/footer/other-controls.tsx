import {
  ListMusicIcon,
  Mic2Icon,
  MonitorSpeaker,
  PlaySquareIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
} from 'lucide-react';
import ControlButton from './control-button';
import { Slider } from '@/components/ui/slider';
import { useAppDispatch, useTypedSelector } from '@/store';
import { setVolume, toggleMute } from '@/features/player-controller/player-controller-slice';
import { useState } from 'react';
import { toggleIsNowPlaying } from '@/features/app-controller/app-controller-slice';

export default function OtherControls(): JSX.Element {
  const [volume, isMuted] = useTypedSelector((state) => [
    state.playerController.volume,
    state.playerController.isMuted,
  ]);
  const dispatch = useAppDispatch();

  const [sliderValue, setSliderValue] = useState<number[]>([volume * 100]);

  const iconProperty = { strokeWidth: 2.5, size: 18 };

  const onMuteButton = () => {
    if (isMuted) {
      setSliderValue([volume * 100]);
    } else {
      setSliderValue([0]);
    }

    dispatch(toggleMute());
  };

  const onVolumeChange = (value: number[]) => {
    setSliderValue([value[0]]);
    dispatch(setVolume(value[0] / 100));
  };

  const openPlayingView = () => {
    dispatch(toggleIsNowPlaying());
  };

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
      <div className="group flex w-32 flex-row items-center">
        <ControlButton tooltipText="Mute" className="text-zinc-400 group-hover:text-zinc-100" onClick={onMuteButton}>
          {isMuted || volume === 0 ? (
            <VolumeXIcon {...iconProperty} />
          ) : volume > 0 && volume < 0.3 ? (
            <VolumeIcon {...iconProperty} />
          ) : volume > 0.3 && volume < 0.6 ? (
            <Volume1Icon {...iconProperty} />
          ) : (
            <Volume2Icon {...iconProperty} />
          )}
        </ControlButton>
        <Slider
          className="col-span-3"
          onValueChange={onVolumeChange}
          defaultValue={sliderValue}
          value={sliderValue}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
