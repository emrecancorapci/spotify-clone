import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';

import ControlButton from '@/components/ui/control-button';
import { Slider } from '@/components/ui/slider';
import { selectOtherControlsStates } from '@/features/player-controller/player-controller-selectors';
import { setVolume, toggleMute } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

export default function VolumeController(): JSX.Element {
  const { volume, isMuted } = useTypedSelector(selectOtherControlsStates);
  const dispatch = useDispatch();

  const onMuteButton = () => dispatch(toggleMute());

  const onVolumeChange = (value: number[]) => {
    dispatch(setVolume(value[0] / 100));
  };

  const iconProperty = { strokeWidth: 2.5, size: 18 };

  return (
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
        defaultValue={[volume * 100]}
        value={[isMuted ? 0 : volume * 100]}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
