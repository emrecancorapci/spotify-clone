import { useState } from 'react';

import ButtonGroup from './player-controller/button-group';
import ControllerSlider from './player-controller/controller-slider';
import TimeDisplay from './player-controller/time-display';

export default function PlayerController(): React.ReactNode {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioPlayer = document.querySelector<HTMLAudioElement>('#audio-player');

  audioPlayer?.addEventListener('timeupdate', () => {
    setTimeout(() => setCurrentTime(audioPlayer.currentTime), 1000);
  });

  const duration = audioPlayer?.duration ?? 0;

  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <ButtonGroup />

      <div className="flex w-full flex-row items-center gap-2 text-s-gray-light">
        <TimeDisplay totalSeconds={currentTime} />
        <ControllerSlider />
        <TimeDisplay totalSeconds={duration} />
      </div>
    </div>
  );
}
