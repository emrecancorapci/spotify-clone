import { configureStore, createSelector } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import appControllerReducer from './features/app-controller/app-controller-slice';
import playerControllerReducer from './features/player-controller/player-controller-slice';

export const store = configureStore({
  reducer: {
    playerController: playerControllerReducer,
    appController: appControllerReducer,
  },
});

const audioSource = (state: RootState) => state.playerController.audioSource;
const volume = (state: RootState) => state.playerController.volume;
const duration = (state: RootState) => state.playerController.duration;
const currentTime = (state: RootState) => state.playerController.currentTime;

const isPlaying = (state: RootState) => state.playerController.isPlaying;
const isMuted = (state: RootState) => state.playerController.isMuted;
const isShuffle = (state: RootState) => state.playerController.isShuffle;
const isRepeat = (state: RootState) => state.playerController.isRepeat;

export const selectButtonGroupStates = createSelector(
  [isPlaying, isShuffle, isRepeat],
  (isPlaying, isShuffle, isRepeat) => {
    return { isPlaying, isRepeat, isShuffle };
  },
);

export const selectOtherControlsStates = createSelector([volume, isMuted], (volume, isMuted) => {
  return { volume, isMuted };
});

export const selectProgressBarStates = createSelector([duration, currentTime], (duration, currentTime) => {
  return { duration, currentTime };
});

export const selectAudioPlayerStates = createSelector(
  [audioSource, volume, isMuted, isPlaying],
  (audioSource, volume, isMuted, isPlaying) => {
    return { audioSource, volume, isMuted, isPlaying };
  },
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
