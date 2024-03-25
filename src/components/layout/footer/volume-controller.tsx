import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import ControlButton from '@/components/ui/control-button';
import { Slider } from '@/components/ui/slider';
import getIconSize from '@/lib/get-icon-size';

export default function VolumeController(): JSX.Element {
  const iconProperty = getIconSize();

  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');

  const defaultVolume = useMemo(() => [volume * 100], [volume]);
  const volumeValue = useMemo(() => [isMuted ? 0 : volume * 100], [isMuted, volume]);

  const onValueChange = useCallback(
    (value: number[]) => {
      if (value[0] === undefined || !audioPlayer) return;

      setVolume(value[0] / 100);
      audioPlayer.volume = value[0] / 100;
    },
    [audioPlayer],
  );

  const onMuteClick = useCallback(() => {
    if (!audioPlayer) return;

    setIsMuted((previous) => !previous);
    audioPlayer.muted = !isMuted;
  }, [audioPlayer, isMuted]);

  return (
    <div className="group flex w-32 flex-row items-center">
      <ControlButton
        className="text-s-gray-lighter group-hover:text-s-gray-lightest"
        onClick={onMuteClick}
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
        onValueChange={onValueChange}
        step={1}
        value={volumeValue}
      />
    </div>
  );
}
