import { ListMusicIcon, Mic2Icon, MonitorSpeaker, PlaySquareIcon, Volume2Icon } from 'lucide-react';
import ControlButton from './control-button';
import { Slider } from '@/components/ui/slider';
import { useAppDispatch } from '@/store';
import { setVolume, toggleMute } from '@/features/player-controller/player-controller-slice';

const openPlayingView = () => {
  console.log('Open Playing View');
};

export default function OtherControls(): JSX.Element {
  const dispatch = useAppDispatch();

  const iconProperty = { strokeWidth: 2.5, size: 18 };

  const onVolumeButton = () => dispatch(toggleMute());
  const onVolumeChange = (value: number[]) => dispatch(setVolume(1 - value[0] / 100));

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
        <ControlButton tooltipText="Mute" className="text-zinc-400 group-hover:text-zinc-100" onClick={onVolumeButton}>
          <Volume2Icon {...iconProperty} />
        </ControlButton>
        <Slider
          className="col-span-3"
          onValueChange={onVolumeChange}
          defaultValue={[1]}
          inverted={true}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
