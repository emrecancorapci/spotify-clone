import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { useState } from 'react';
import ControlButton from './control-button';
import { Slider } from '@/components/ui/slider';

const onPrevious = () => {
  console.log('Previous Song');
};
const onNext = () => {
  console.log('Next Song');
};

export default function SongControl(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<'none' | 'one' | 'all'>('none');

  const iconProperty = { strokeWidth: 2.5, size: 20 };

  const onPlay = () => setIsPlaying((state) => !state);
  const onShuffle = () => setIsShuffle((state) => !state);
  const onRepeat = () =>
    setIsRepeat((state) => {
      switch (state) {
        case 'none': {
          return 'all';
        }
        case 'all': {
          return 'one';
        }
        case 'one': {
          return 'none';
        }
        // No default
      }
    });

  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <div className="flex flex-row justify-center gap-3">
        <ControlButton
          className={isShuffle ? 'text-green-500 hover:text-green-400' : 'text-zinc-400 hover:text-zinc-100'}
          onClick={onShuffle}
        >
          {isShuffle ? <ShuffleIcon {...iconProperty} /> : <ShuffleIcon {...iconProperty} />}
        </ControlButton>

        <ControlButton className="text-zinc-400 hover:text-zinc-100" onClick={onPrevious}>
          <SkipBackIcon {...iconProperty} />
        </ControlButton>
        <ControlButton
          onClick={onPlay}
          className="bg-zinc-100 text-black transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          {isPlaying ? <PlayIcon className="relative left-[1px]" {...iconProperty} /> : <PauseIcon {...iconProperty} />}
        </ControlButton>

        <ControlButton className="text-zinc-400 hover:text-zinc-100" onClick={onNext}>
          <SkipForwardIcon {...iconProperty} />
        </ControlButton>

        <ControlButton
          className={isRepeat === 'none' ? 'text-zinc-400 hover:text-zinc-100' : 'text-green-500 hover:text-green-400'}
          onClick={onRepeat}
        >
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
        <p className="text-xs text-zinc-400">0:00</p>
        <Slider defaultValue={[1]} inverted={true} min={0} max={100} step={1} />
        <p className="text-xs text-zinc-400">6:53</p>
      </div>
    </div>
  );
}
