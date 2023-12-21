import { createSlice, type PayloadAction, type UnknownAction } from '@reduxjs/toolkit';
import { type RefObject } from 'react';

export interface PlayerControllerState {
  audioReference: RefObject<HTMLAudioElement> | undefined;
  volume: number;
  isMuted: boolean;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: 'none' | 'one' | 'all';
}

const initialState: PlayerControllerState = {
  audioReference: undefined,
  volume: 0.5,
  isMuted: false,
  isPlaying: false,
  isShuffle: false,
  isRepeat: 'none',
};

function isActionWithNumberPayload(action: UnknownAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

export const playerControllerSlice = createSlice({
  name: 'playerController',
  initialState,
  reducers: {
    setAudioReference: (state, action) => {
      // Fix type
      state.audioReference = action.payload;
    },
    setVolume: (state, action) => {
      if (isActionWithNumberPayload(action)) {
        if (state.isMuted) {
          state.isMuted = false;
        }
        state.volume = action.payload;
      }
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
    toggleRepeat: (state) => {
      switch (state.isRepeat) {
        case 'none': {
          state.isRepeat = 'all';
          break;
        }
        case 'all': {
          state.isRepeat = 'one';
          break;
        }
        case 'one': {
          state.isRepeat = 'none';
          break;
        }
        // No default
      }
    },
  },
});

export const { setAudioReference, setVolume, togglePlay, toggleMute, toggleShuffle, toggleRepeat } =
  playerControllerSlice.actions;

export default playerControllerSlice.reducer;
