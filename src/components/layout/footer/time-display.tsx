const TimeDisplay = ({ seconds }: { seconds: number }) => {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Ensure that minutes and seconds are displayed with leading zeros if needed
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(Math.round(remainingSeconds)).padStart(2, '0');

  return (
    <p className="text-xs text-zinc-400">
      {formattedMinutes}:{formattedSeconds}
    </p>
  );
};

export default TimeDisplay;
