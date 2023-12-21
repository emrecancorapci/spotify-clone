import { useEffect, useRef, useState } from 'react';

import { Slider } from '@/components/ui/slider';
import { selectPlayerControllerStates, useTypedSelector } from '@/store';

import ButtonGroup from './button-group';

export default function PlayerController(): JSX.Element {
  const { isPlaying } = useTypedSelector(selectPlayerControllerStates);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const iconProperty = { strokeWidth: 2.5, size: 20 };

  const onPlay = () => dispatch(togglePlay());
  const onShuffle = () => dispatch(toggleShuffle());
  const onRepeat = () => dispatch(toggleRepeat());

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((state) => state + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const onSliderChange = (value: number[]) => {
    setCurrentTime(value[0]);
  };

  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <ButtonGroup audioReference={audioReference} />

      <div className="flex w-full flex-row items-center gap-2 text-zinc-200">
        <p className="text-xs text-zinc-400">{`${Math.floor(currentTime / 60)}:${String(currentTime % 60).padStart(
          2,
          '0',
        )}`}</p>
        <Slider defaultValue={[1]} min={0} value={[currentTime]} onValueChange={onSliderChange} max={420} step={1} />
        <p className="text-xs text-zinc-400">7:00</p>
      </div>
    </div>
  );
}
