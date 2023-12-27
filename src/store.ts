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

const playerController = (state: RootState) => state.playerController;
const appController = (state: RootState) => state.appController;

const audioSource = (state: RootState) => playerController(state).audioSource;
const volume = (state: RootState) => playerController(state).volume;
const duration = (state: RootState) => playerController(state).duration;
const currentTime = (state: RootState) => playerController(state).currentTime;

const isPlaying = (state: RootState) => playerController(state).isPlaying;
const isMuted = (state: RootState) => playerController(state).isMuted;
const isShuffle = (state: RootState) => playerController(state).isShuffle;
const isRepeat = (state: RootState) => playerController(state).isRepeat;

const isNowPlayingVisible = (state: RootState) => appController(state).isNowPlayingVisible;
const isLeftPanelExpanded = (state: RootState) => appController(state).isLeftPanelExpanded;

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
  [audioSource, currentTime, volume, isMuted, isPlaying],
  (audioSource, currentTime, volume, isMuted, isPlaying) => {
    return { audioSource, currentTime, volume, isMuted, isPlaying };
  },
);

export const selectLayoutStates = createSelector(
  [isNowPlayingVisible, isLeftPanelExpanded],
  (isNowPlayingVisible, isLeftPanelExpanded) => {
    return { isNowPlayingVisible, isLeftPanelExpanded };
  },
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
