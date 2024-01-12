import { createSlice, type PayloadAction, type UnknownAction } from '@reduxjs/toolkit';

export interface PlayerControllerState {
  audioSource: string | undefined;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  isPlaying: boolean;
  isRepeat: 'all' | 'none' | 'one';
  isShuffle: boolean;
  volume: number;
}

const initialState: PlayerControllerState = {
  audioSource: undefined,
  currentTime: 0,
  duration: 0,
  isMuted: false,
  isPlaying: false,
  isRepeat: 'none',
  isShuffle: false,
  volume: 0.5,
};

function isActionWithNumberPayload(action: UnknownAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

function isActionWithStringPayload(action: UnknownAction): action is PayloadAction<string> {
  return typeof action.payload === 'string';
}

export const playerControllerSlice = createSlice({
  initialState,
  name: 'playerController',
  reducers: {
    setAudioSource(state, action) {
      if (!isActionWithStringPayload(action)) return;

      state.audioSource = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      if (!isActionWithNumberPayload(action)) return;

      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      if (!isActionWithNumberPayload(action)) return;

      state.duration = action.payload;
    },
    setVolume: (state, action) => {
      if (!isActionWithNumberPayload(action)) return;

      if (state.isMuted) {
        state.isMuted = false;
      }
      state.volume = action.payload;
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
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
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
  },
});

export const {
  setAudioSource,
  setCurrentTime,
  setDuration,
  setVolume,
  toggleMute,
  togglePlay,
  toggleRepeat,
  toggleShuffle,
} = playerControllerSlice.actions;

export default playerControllerSlice.reducer;
