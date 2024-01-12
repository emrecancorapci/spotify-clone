import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import appControllerReducer from './features/app-controller/app-controller-slice';
import playerControllerReducer from './features/player-controller/player-controller-slice';

export const store = configureStore({
  reducer: {
    appController: appControllerReducer,
    playerController: playerControllerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
