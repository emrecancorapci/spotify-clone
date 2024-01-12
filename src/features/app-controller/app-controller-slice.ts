import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AppControllerState {
  isLeftPanelExpanded?: boolean;
  isNowPlayingVisible: boolean;
}

const initialState: AppControllerState = {
  isLeftPanelExpanded: false,
  isNowPlayingVisible: false,
};

const appControllerSlice = createSlice({
  initialState,
  name: 'appController',

  reducers: {
    setIsLeftPanelExpanded: (state, { payload }: PayloadAction<boolean>) => {
      state.isLeftPanelExpanded = payload;
    },

    toggleIsNowPlaying: (state) => {
      state.isNowPlayingVisible = !state.isNowPlayingVisible;
    },
  },
});

export const { setIsLeftPanelExpanded, toggleIsNowPlaying } = appControllerSlice.actions;

export default appControllerSlice.reducer;
