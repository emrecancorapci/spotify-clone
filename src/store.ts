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

const isPlaying = (state: RootState) => state.playerController.isPlaying;
const isShuffle = (state: RootState) => state.playerController.isShuffle;
const isRepeat = (state: RootState) => state.playerController.isRepeat;
const volume = (state: RootState) => state.playerController.volume;
const isMuted = (state: RootState) => state.playerController.isMuted;

export const selectPlayerControllerStates = createSelector(
  [isPlaying, isShuffle, isRepeat],
  (isPlaying, isShuffle, isRepeat) => {
    return { isPlaying, isRepeat, isShuffle };
  },
);

export const selectOtherControlsStates = createSelector([volume, isMuted], (volume, isMuted) => {
  return { volume, isMuted };
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
