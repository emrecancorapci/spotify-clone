import { memo } from 'react';

const TimeDisplay = memo(({ totalSeconds }: { totalSeconds: number }) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = Number.isNaN(totalSeconds) ? '00' : String(minutes).padStart(2, '0');
  const formattedSeconds = Number.isNaN(totalSeconds) ? '00' : String(Math.round(seconds)).padStart(2, '0');

  return (
    <p className="text-xs text-s-gray-lighter">
      {formattedMinutes}:{formattedSeconds}
    </p>
  );
});

TimeDisplay.displayName = 'TimeDisplay';

export default TimeDisplay;
