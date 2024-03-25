import { useCallback, useEffect, useRef, useState } from 'react';

import { Slider } from '@/components/ui/slider';
import { selectProgressBarStates } from '@/features/player-controller/player-controller-selectors';
import { useTypedSelector } from '@/store';

const defaultValue = [0];

export default function ControllerSlider(): JSX.Element {
  const { duration } = useTypedSelector(selectProgressBarStates);
  const [value, setValue] = useState<number[]>([0]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderReference = useRef<HTMLDivElement>(null);

  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');

  const onValueChange = (value: number[]) => {
    setIsDragging(true);
    setValue(value);
  };

  const onSliderCommit = () => {
    if (value[0] === undefined || !audioPlayer) return;

    audioPlayer.currentTime = value[0];

    setIsDragging(false);
  };

  const updateSlider = useCallback(() => {
    if (audioPlayer && value[0] !== audioPlayer.currentTime) {
      setValue([audioPlayer.currentTime]);
    }
  }, [audioPlayer, value]);

  useEffect(() => {
    if (isDragging) {
      audioPlayer?.removeEventListener('timeupdate', updateSlider);
    } else {
      audioPlayer?.addEventListener('timeupdate', updateSlider);
    }
  }, [isDragging, audioPlayer, updateSlider]);

  return (
    <Slider
      ref={sliderReference}
      defaultValue={defaultValue}
      max={duration}
      min={0}
      onValueChange={onValueChange}
      onValueCommit={onSliderCommit}
      step={1}
      value={value}
    />
  );
}
