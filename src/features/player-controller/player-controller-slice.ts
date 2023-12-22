import { createSlice, type PayloadAction, type UnknownAction } from '@reduxjs/toolkit';

export interface PlayerControllerState {
  audioSource: string | undefined;
  volume: number;
  duration: number;
  currentTime: number;
  isMuted: boolean;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: 'none' | 'one' | 'all';
}

const initialState: PlayerControllerState = {
  audioSource: undefined,
  volume: 0.5,
  duration: 0,
  currentTime: 0,
  isMuted: false,
  isPlaying: false,
  isShuffle: false,
  isRepeat: 'none',
};

function isActionWithNumberPayload(action: UnknownAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

function isActionWithStringPayload(action: UnknownAction): action is PayloadAction<string> {
  return typeof action.payload === 'string';
}

export const playerControllerSlice = createSlice({
  name: 'playerController',
  initialState,
  reducers: {
    setAudioSource(state, action) {
      if (!isActionWithStringPayload(action)) return;

      state.audioSource = action.payload;
    },
    setVolume: (state, action) => {
      if (!isActionWithNumberPayload(action)) return;

      if (state.isMuted) {
        state.isMuted = false;
      }
      state.volume = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      if (!isActionWithNumberPayload(action)) return;

      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      if (!isActionWithNumberPayload(action)) return;

      state.duration = action.payload;
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

export const {
  setAudioSource,
  setVolume,
  setDuration,
  setCurrentTime,
  togglePlay,
  toggleMute,
  toggleShuffle,
  toggleRepeat,
} = playerControllerSlice.actions;

export default playerControllerSlice.reducer;
