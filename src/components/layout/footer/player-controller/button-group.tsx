import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';

import ControlButton from '@/components/ui/control-button';
import { selectButtonGroupStates } from '@/features/player-controller/player-controller-selectors';
import {
  setAudioSource,
  togglePlay,
  toggleRepeat,
  toggleShuffle,
} from '@/features/player-controller/player-controller-slice';
import getIconSize from '@/lib/get-icon-size';
import { useAppDispatch, useTypedSelector } from '@/store';

export default function ButtonGroup(): JSX.Element {
  const { isPlaying, isRepeat, isShuffle } = useTypedSelector(selectButtonGroupStates);
  const dispatch = useAppDispatch();

  const iconProperty = getIconSize();

  const onPlay = () => dispatch(togglePlay());
  const onShuffle = () => dispatch(toggleShuffle());
  const onRepeat = () => dispatch(toggleRepeat());
  const onPrevious = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'));
  const onNext = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'));

  return (
    <div className="flex flex-row justify-center gap-3 pb-1">
      <ControlButton onClick={onShuffle} switchControl={isShuffle} type="switch">
        {isShuffle ? <ShuffleIcon {...iconProperty} size={17} /> : <ShuffleIcon {...iconProperty} size={17} />}
      </ControlButton>

      <ControlButton onClick={onPrevious} type="button">
        <SkipBackIcon {...iconProperty} />
      </ControlButton>

      <ControlButton
        className="bg-s-gray-lightest text-black transition-transform duration-100 hover:scale-105 active:scale-95"
        onClick={onPlay}
      >
        {isPlaying ? <PauseIcon {...iconProperty} /> : <PlayIcon className="relative left-px" {...iconProperty} />}
      </ControlButton>

      <ControlButton onClick={onNext} type="button">
        <SkipForwardIcon {...iconProperty} />
      </ControlButton>

      <ControlButton onClick={onRepeat} switchControl={isRepeat === 'one' || isRepeat === 'all'} type="switch">
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
