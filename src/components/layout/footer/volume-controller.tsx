import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import ControlButton from '@/components/ui/control-button';
import { Slider } from '@/components/ui/slider';
import { selectOtherControlsStates } from '@/features/player-controller/player-controller-selectors';
import { setVolume, toggleMute } from '@/features/player-controller/player-controller-slice';
import getIconSize from '@/lib/get-icon-size';
import { useTypedSelector } from '@/store';

export default function VolumeController(): JSX.Element {
  const { isMuted, volume } = useTypedSelector(selectOtherControlsStates);
  const dispatch = useDispatch();

  const defaultVolume = useMemo(() => [volume * 100], [volume]);
  const volumeValue = useMemo(() => [isMuted ? 0 : volume * 100], [isMuted, volume]);

  const onMuteButton = useCallback(() => dispatch(toggleMute()), [dispatch]);
  const onVolumeChange = useCallback(
    (value: number[]) => {
      if (value[0] === undefined) return;
      dispatch(setVolume(value[0]));
    },
    [dispatch],
  );

  const iconProperty = getIconSize();

  return (
    <div className="group flex w-32 flex-row items-center">
      <ControlButton
        className="text-s-gray-light group-hover:text-s-gray-lightest"
        onClick={onMuteButton}
        tooltipText="Mute"
      >
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
        defaultValue={defaultVolume}
        max={100}
        min={0}
        onValueChange={onVolumeChange}
        step={1}
        value={volumeValue}
      />
    </div>
  );
}
