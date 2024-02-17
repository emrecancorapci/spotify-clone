import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Slider } from '@/components/ui/slider';
import { selectProgressBarStates } from '@/features/player-controller/player-controller-selectors';
import { setCurrentTime } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

export default function ControllerSlider(): JSX.Element {
  const { currentTime, duration } = useTypedSelector(selectProgressBarStates);
  const dispatch = useDispatch();

  const defaultValue = useMemo(() => [0], []);
  const value = useMemo(() => [currentTime], [currentTime]);

  const onSliderChange = useCallback(
    (value: number[]) => {
      if (value[0] === undefined) return;
      dispatch(setCurrentTime(value[0]));
    },
    [dispatch],
  );

  return (
    <Slider defaultValue={defaultValue} max={duration} min={0} onValueChange={onSliderChange} step={1} value={value} />
  );
}
