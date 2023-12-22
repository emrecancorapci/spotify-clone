import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Slider } from '@/components/ui/slider';
import { setAudioReference } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

import ButtonGroup from './button-group';
import TimeDisplay from './time-display';

export default function PlayerController(): JSX.Element {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const isPlaying = useTypedSelector((state) => state.playerController.isPlaying);

  const audioReference = useRef<HTMLAudioElement | null>(null);
  dispatch(setAudioReference(audioReference));

  const audio = {
    duration: audioReference.current?.duration ?? 167,
    currentTime: audioReference.current?.currentTime ?? 0,
  };

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
        <TimeDisplay seconds={audio.currentTime} />

        <Slider
          defaultValue={[1]}
          min={0}
          value={[audio.currentTime]}
          onValueChange={onSliderChange}
          max={420}
          step={1}
        />

        <TimeDisplay seconds={audio.duration} />
      </div>
    </div>
  );
}
