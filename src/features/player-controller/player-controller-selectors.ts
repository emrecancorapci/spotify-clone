import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const playerController = (state: RootState) => state.playerController;

const audioSource = (state: RootState) => playerController(state).audioSource;
const volume = (state: RootState) => playerController(state).volume;
const duration = (state: RootState) => playerController(state).duration;
const currentTime = (state: RootState) => playerController(state).currentTime;

const isPlaying = (state: RootState) => playerController(state).isPlaying;
const isMuted = (state: RootState) => playerController(state).isMuted;
const isShuffle = (state: RootState) => playerController(state).isShuffle;
const isRepeat = (state: RootState) => playerController(state).isRepeat;

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
