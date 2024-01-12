/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { useDispatch } from 'react-redux';

import { Slider } from '@/components/ui/slider';
import { selectProgressBarStates } from '@/features/player-controller/player-controller-selectors';
import { setCurrentTime } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

import ButtonGroup from './player-controller/button-group';
import TimeDisplay from './player-controller/time-display';

export default function PlayerController(): JSX.Element {
  const { currentTime, duration } = useTypedSelector(selectProgressBarStates);
  const dispatch = useDispatch();

  const onSliderChange = (value: number[]) => {
    if (value[0] === undefined) return;
    dispatch(setCurrentTime(value[0]));
  };

  return (
    <div className="flex w-full max-w-[35vw] flex-col items-center gap-1">
      <ButtonGroup />

      <div className="flex w-full flex-row items-center gap-2 text-s-gray-lighter">
        <TimeDisplay seconds={currentTime} />

        <Slider
          defaultValue={[0]}
          max={duration}
          min={0}
          onValueChange={onSliderChange}
          step={1}
          value={[currentTime]}
        />

        <TimeDisplay seconds={duration} />
      </div>
    </div>
  );
}
