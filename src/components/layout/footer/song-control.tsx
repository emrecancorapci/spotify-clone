import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { useState } from 'react';
import ControlButton from './control-button';

const onPrevious = () => {
  console.log('Previous Song');
};
const onNext = () => {
  console.log('Next Song');
};

export default function SongControl(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<false | 'one' | 'all'>(false);

  const iconProperty = { strokeWidth: 2.5, size: 26 };

  const onPlay = () => setIsPlaying((state) => !state);
  const onShuffle = () => setIsShuffle((state) => !state);
  const onRepeat = () =>
    setIsRepeat((state) => {
      if (!state) return 'all';
      else if (state === 'all') return 'one';
      else if (state === 'one') return false;
      else return false;
    });
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center gap-3">
        <ControlButton onClick={onShuffle}>
          {isShuffle ? (
            <ShuffleIcon className="h-5 w-5 text-green-500" {...iconProperty} />
          ) : (
            <ShuffleIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
          )}
        </ControlButton>
        <ControlButton onClick={onPrevious}>
          <SkipBackIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
        </ControlButton>
        <ControlButton
          onClick={onPlay}
          className="bg-zinc-100 transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <PlayIcon className="relative left-[1px] h-5 w-5 text-black" {...iconProperty} />
          ) : (
            <PauseIcon className="h-5 w-5 text-black" {...iconProperty} />
          )}
        </ControlButton>
        <ControlButton onClick={onNext}>
          <SkipForwardIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
        </ControlButton>
        <ControlButton onClick={onRepeat}>
          {isRepeat === 'one' ? (
            <Repeat1Icon className="h-5 w-5 text-green-500" {...iconProperty} />
          ) : isRepeat === 'all' ? (
            <RepeatIcon className="h-5 w-5 text-green-500" {...iconProperty} />
          ) : (
            <RepeatIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
          )}
        </ControlButton>
      </div>
    </div>
  );
}
