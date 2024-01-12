import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const playerController = (state: RootState) => state.playerController;

const audioSource = (state: RootState) => playerController(state).audioSource;
const currentTime = (state: RootState) => playerController(state).currentTime;
const duration = (state: RootState) => playerController(state).duration;
const volume = (state: RootState) => playerController(state).volume;

const isMuted = (state: RootState) => playerController(state).isMuted;
const isPlaying = (state: RootState) => playerController(state).isPlaying;
const isRepeat = (state: RootState) => playerController(state).isRepeat;
const isShuffle = (state: RootState) => playerController(state).isShuffle;

export const selectButtonGroupStates = createSelector(
  [isPlaying, isShuffle, isRepeat],
  (isPlaying, isShuffle, isRepeat) => {
    return { isPlaying, isRepeat, isShuffle };
  },
);

export const selectOtherControlsStates = createSelector([volume, isMuted], (volume, isMuted) => {
  return { isMuted, volume };
});

export const selectProgressBarStates = createSelector([duration, currentTime], (duration, currentTime) => {
  return { currentTime, duration };
});

export const selectAudioPlayerStates = createSelector(
  [audioSource, currentTime, volume, isMuted, isPlaying],
  (audioSource, currentTime, volume, isMuted, isPlaying) => {
    return { audioSource, currentTime, isMuted, isPlaying, volume };
  },
);
