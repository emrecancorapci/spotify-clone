import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import ControlButton from '@/components/ui/control-button';
import ControlSwitch from '@/components/ui/control-switch';
import { selectButtonGroupStates } from '@/features/player-controller/player-controller-selectors';
import { setAudioSource, toggleRepeat, toggleShuffle } from '@/features/player-controller/player-controller-slice';
import { useAppDispatch, useTypedSelector } from '@/store';

export default function ButtonGroup(): JSX.Element {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const { isRepeat, isShuffle } = useTypedSelector(selectButtonGroupStates);
  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');

  const onClickPlay = useCallback(() => {
    if (!audioPlayer) return;

    if (audioPlayer.paused) void audioPlayer.play();
    else void audioPlayer.pause();

    setIsPaused(audioPlayer.paused);
  }, [audioPlayer]);

  const dispatch = useAppDispatch();

  const onShuffle = () => dispatch(toggleShuffle());
  const onRepeat = () => dispatch(toggleRepeat());
  const onPrevious = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'));
  const onNext = () => dispatch(setAudioSource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'));

  return (
    <div className="flex flex-row justify-center gap-3 pb-1">
      <ControlSwitch Icon={ShuffleIcon} size={17} onClick={onShuffle} switchControl={isShuffle} />
      <ControlButton Icon={SkipBackIcon} onClick={onPrevious} button />
      <ControlButton
        Icon={isPaused ? PlayIcon : PauseIcon}
        className="bg-s-gray-lightest text-black transition-transform duration-100 hover:scale-105 active:scale-95"
        onClick={onClickPlay}
      />
      <ControlButton Icon={SkipForwardIcon} onClick={onNext} button />
      <ControlSwitch
        Icon={isRepeat === 'one' ? Repeat1Icon : RepeatIcon}
        onClick={onRepeat}
        switchControl={isRepeat === 'one' || isRepeat === 'all'}
      ></ControlSwitch>
    </div>
  );
}
