import { useCallback, useRef, useState } from 'react';

import { Slider } from '@/components/ui/slider';
import { selectProgressBarStates } from '@/features/player-controller/player-controller-selectors';
import { useTypedSelector } from '@/store';

const defaultValue = [0];

export default function ControllerSlider(): JSX.Element {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { duration } = useTypedSelector(selectProgressBarStates);

  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');
  const sliderReference = useRef<HTMLSpanElement>(null);

  const onSliderCommit = (value: number[]) => {
    if (value[0] === undefined || !audioPlayer) return;

    audioPlayer.currentTime = value[0];
  };

  const updateSlider = useCallback(() => {
    if (!audioPlayer || isDragging || !sliderReference.current) return;

    sliderReference.current.style.setProperty('--value', `${(audioPlayer.currentTime / duration) * 100}%`);
  }, [audioPlayer, duration, isDragging]);

  audioPlayer?.addEventListener('timeupdate', updateSlider);

  return (
    <Slider
      ref={sliderReference}
      defaultValue={defaultValue}
      max={duration}
      min={0}
      onValueCommit={(value) => onSliderCommit(value)}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      step={1}
    />
  );
}
