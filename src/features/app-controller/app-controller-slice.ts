import { createSlice, type PayloadAction, type AnyAction } from '@reduxjs/toolkit';

export interface AppControllerState {
  isNowPlayingVisible: boolean;
}

const initialState: AppControllerState = {
  isNowPlayingVisible: false,
};

export const appControllerSlice = createSlice({
  name: 'appController',
  initialState,
  reducers: {
    toggleIsNowPlaying: (state) => {
      state.isNowPlayingVisible = !state.isNowPlayingVisible;
    },
  },
});

export const { toggleIsNowPlaying } = appControllerSlice.actions;

export default appControllerSlice.reducer;
