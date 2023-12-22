import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';

import {
  setAudioSource,
  togglePlay,
  toggleRepeat,
  toggleShuffle,
} from '@/features/player-controller/player-controller-slice';
import { selectButtonGroupStates, useAppDispatch, useTypedSelector } from '@/store';

import ControlButton from './control-button';

export default function ButtonGroup(): JSX.Element {
  const { isPlaying, isShuffle, isRepeat } = useTypedSelector(selectButtonGroupStates);
  const dispatch = useAppDispatch();

  const iconProperty = { strokeWidth: 2.5, size: 20 };

  const onPlay = () => dispatch(togglePlay());
  const onShuffle = () => dispatch(toggleShuffle());
  const onRepeat = () => dispatch(toggleRepeat());
  const onPrevious = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'));
  const onNext = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'));

  return (
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
  );
}
