import ButtonGroup from './player-controller/button-group';
import ControllerSlider from './player-controller/controller-slider';
import TimeDisplay from './player-controller/time-display';

export default function PlayerController(): JSX.Element {
  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <ButtonGroup />

      <div className="flex w-full flex-row items-center gap-2 text-s-gray-lighter">
        <TimeDisplay type="current" />
        <ControllerSlider />
        <TimeDisplay type="duration" />
      </div>
    </div>
  );
}
