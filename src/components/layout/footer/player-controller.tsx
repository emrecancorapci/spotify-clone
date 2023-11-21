import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import ControlButton from './control-button';
import { Slider } from '@/components/ui/slider';
import { selectPlayerControllerStates, useAppDispatch, useTypedSelector } from '@/store';
import { togglePlay, toggleRepeat, toggleShuffle } from '@/features/player-controller/player-controller-slice';
import { useEffect, useState } from 'react';

const onPrevious = () => {
  console.log('Previous Song');
};
const onNext = () => {
  console.log('Next Song');
};

export default function PlayerController(): JSX.Element {
  const { isPlaying, isShuffle, isRepeat } = useTypedSelector(selectPlayerControllerStates);
  const dispatch = useAppDispatch();

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
      <div className="flex flex-row justify-center gap-3">
        <ControlButton type="switch" switchControl={isShuffle} onClick={onShuffle}>
          {isShuffle ? <ShuffleIcon {...iconProperty} /> : <ShuffleIcon {...iconProperty} />}
        </ControlButton>

        <ControlButton type="button" onClick={onPrevious}>
          <SkipBackIcon {...iconProperty} />
        </ControlButton>

        <ControlButton
          onClick={onPlay}
          className="bg-zinc-100 text-black transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          {isPlaying ? <PauseIcon {...iconProperty} /> : <PlayIcon className="relative left-[1px]" {...iconProperty} />}
        </ControlButton>

        <ControlButton type="button" onClick={onNext}>
          <SkipForwardIcon {...iconProperty} />
        </ControlButton>

        <ControlButton type="switch" switchControl={isRepeat === 'one' || isRepeat === 'all'} onClick={onRepeat}>
          {isRepeat === 'one' ? (
            <Repeat1Icon {...iconProperty} />
          ) : isRepeat === 'all' ? (
            <RepeatIcon {...iconProperty} />
          ) : (
            <RepeatIcon {...iconProperty} />
          )}
        </ControlButton>
      </div>

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
