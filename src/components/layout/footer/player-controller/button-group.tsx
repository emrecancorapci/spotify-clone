import { PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import ControlButton from '@/components/ui/control-button';
import ControlSwitch from '@/components/ui/control-switch';
import { usePlayerControllerStore } from '@/features/playerControllerStore';

export default function ButtonGroup(): JSX.Element {
  const { isRepeat, isShuffle, toggleRepeat, toggleShuffle } = usePlayerControllerStore((state) => ({
    isRepeat: state.isRepeat,
    isShuffle: state.isShuffle,
    toggleRepeat: state.toggleRepeat,
    toggleShuffle: state.toggleShuffle,
  }));
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');

  const onClickPlay = useCallback(() => {
    if (!audioPlayer) return;

    if (audioPlayer.paused) void audioPlayer.play();
    else void audioPlayer.pause();

    setIsPaused(audioPlayer.paused);
  }, [audioPlayer]);

  const onShuffle = useCallback(toggleShuffle, [toggleShuffle]);
  const onRepeat = useCallback(toggleRepeat, [toggleRepeat]);
  const onPrevious = useCallback(() => {
    if (!audioPlayer) return;

    audioPlayer.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
    audioPlayer.load();
    void audioPlayer.play();
  }, [audioPlayer]);
  const onNext = useCallback(() => {
    if (!audioPlayer) return;

    audioPlayer.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
    audioPlayer.load();
    void audioPlayer.play();
  }, [audioPlayer]);

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
