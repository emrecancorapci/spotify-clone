import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const appController = (state: RootState) => state.appController;

const isNowPlayingVisible = (state: RootState) => appController(state).isNowPlayingVisible;
const isLeftPanelExpanded = (state: RootState) => appController(state).isLeftPanelExpanded;

export const selectLayoutStates = createSelector(
  [isNowPlayingVisible, isLeftPanelExpanded],
  (isNowPlayingVisible, isLeftPanelExpanded) => {
    return { isNowPlayingVisible, isLeftPanelExpanded };
  },
);
