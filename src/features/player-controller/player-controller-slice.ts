import { createSlice, type PayloadAction, type AnyAction } from '@reduxjs/toolkit';

export interface PlayerControllerState {
  volume: number;
  isMuted: boolean;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: 'none' | 'one' | 'all';
}

const initialState: PlayerControllerState = {
  volume: 0.5,
  isMuted: false,
  isPlaying: false,
  isShuffle: false,
  isRepeat: 'none',
};

function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

export const playerControllerSlice = createSlice({
  name: 'playerController',
  initialState,
  reducers: {
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

export const { setVolume, togglePlay, toggleMute, toggleShuffle, toggleRepeat } = playerControllerSlice.actions;

export default playerControllerSlice.reducer;
