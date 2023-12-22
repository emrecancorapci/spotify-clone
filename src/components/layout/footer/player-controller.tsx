import { useDispatch } from 'react-redux';

import { Slider } from '@/components/ui/slider';
import { setCurrentTime } from '@/features/player-controller/player-controller-slice';
import { selectProgressBarStates, useTypedSelector } from '@/store';

import ButtonGroup from './player-controller/button-group';
import TimeDisplay from './player-controller/time-display';

export default function PlayerController(): JSX.Element {
  const { currentTime, duration } = useTypedSelector(selectProgressBarStates);
  const dispatch = useDispatch();

  const onSliderChange = (value: number[]) => {
    dispatch(setCurrentTime(value[0]));
  };

  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <ButtonGroup />

      <div className="flex w-full flex-row items-center gap-2 text-zinc-200">
        <TimeDisplay seconds={currentTime} />

        <Slider
          defaultValue={[1]}
          min={0}
          value={[currentTime]}
          onValueChange={onSliderChange}
          max={duration}
          step={1}
        />

        <TimeDisplay seconds={duration} />
      </div>
    </div>
  );
}
