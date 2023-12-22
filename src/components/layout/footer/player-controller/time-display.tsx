import { memo } from 'react';

const TimeDisplay = memo(({ seconds }: { seconds: number }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(Math.round(remainingSeconds)).padStart(2, '0');

  return (
    <p className="text-xs text-zinc-400">
      {formattedMinutes}:{formattedSeconds}
    </p>
  );
});

TimeDisplay.displayName = 'TimeDisplay';

export default TimeDisplay;
