import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import ControlButton from './control-button';
import { Slider } from '@/components/ui/slider';
import { useAppDispatch, useTypedSelector } from '@/store';
import { togglePlay, toggleRepeat, toggleShuffle } from '@/features/player-controller/player-controller-slice';

const onPrevious = () => {
  console.log('Previous Song');
};
const onNext = () => {
  console.log('Next Song');
};

export default function SongControl(): JSX.Element {
  const [isPlaying, isShuffle, isRepeat] = useTypedSelector((state) => [
    state.playerController.isPlaying,
    state.playerController.isShuffle,
    state.playerController.isRepeat,
  ]);
  const dispatch = useAppDispatch();

  const iconProperty = { strokeWidth: 2.5, size: 20 };

  const onPlay = () => dispatch(togglePlay());
  const onShuffle = () => dispatch(toggleShuffle());
  const onRepeat = () => dispatch(toggleRepeat());

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
          {isPlaying ? <PlayIcon className="relative left-[1px]" {...iconProperty} /> : <PauseIcon {...iconProperty} />}
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
        <p className="text-xs text-zinc-400">0:00</p>
        <Slider defaultValue={[1]} inverted={true} min={0} max={100} step={1} />
        <p className="text-xs text-zinc-400">6:53</p>
      </div>
    </div>
  );
}
