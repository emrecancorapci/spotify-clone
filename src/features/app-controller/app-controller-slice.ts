import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppControllerState {
  isNowPlayingVisible: boolean;
  isLeftPanelExpanded?: boolean;
}

const initialState: AppControllerState = {
  isNowPlayingVisible: false,
  isLeftPanelExpanded: false,
};

export const appControllerSlice = createSlice({
  name: 'appController',
  initialState,
  reducers: {
    toggleIsNowPlaying: (state) => {
      state.isNowPlayingVisible = !state.isNowPlayingVisible;
    },
    setIsLeftPanelExpanded: (state, action: PayloadAction<boolean>) => {
      state.isLeftPanelExpanded = action.payload;
    },
  },
});

export const { toggleIsNowPlaying } = appControllerSlice.actions;

export default appControllerSlice.reducer;
