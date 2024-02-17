import { memo } from 'react';

import { useTypedSelector } from '@/store';

const TimeDisplay = memo(({ type }: { type: 'current' | 'duration' }) => {
  const seconds = useTypedSelector((state) =>
    type === 'current' ? state.playerController.currentTime : state.playerController.duration,
  );

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(Math.round(remainingSeconds)).padStart(2, '0');

  return (
    <p className="text-xs text-s-gray-light">
      {formattedMinutes}:{formattedSeconds}
    </p>
  );
});

TimeDisplay.displayName = 'TimeDisplay';

export default TimeDisplay;
